#!/usr/bin/env node
'use strict';

const path = require('path');
const { createLogger } = require('../src/logger');
const { loadGeofencesFromFile } = require('../src/configLoader');
const { shouldTriggerAlert } = require('../src/alertTrigger');
const { formatDistance } = require('../src/units');
const { formatEta } = require('../src/eta');

const log = createLogger('cli');

const USAGE = `geofence-toolkit CLI

Usage:
  geofence-toolkit check --config <file> --lat <n> --lng <n> [--speed <m/s>] [--fence <name>]
  geofence-toolkit watch --config <file> --route "lat,lng;lat,lng;..." [--speed <m/s>] [--interval-ms <n>]
  geofence-toolkit help      Show this message

check options:
  --config   Path to a geofences JSON file (see config/example.json)
  --lat      Current latitude
  --lng      Current longitude
  --speed    Current speed in m/s (default 0)
  --fence    Only check this fence by name (default: check all)

watch options:
  --config       Path to a geofences JSON file
  --route        Semicolon-separated "lat,lng" points simulating movement
  --speed        Simulated speed in m/s (default 5)
  --interval-ms  Delay between simulated ticks (default 500)
`;

function parseArgs(argv) {
  const [command, ...rest] = argv;
  const opts = {};
  for (let i = 0; i < rest.length; i += 1) {
    const token = rest[i];
    if (token.startsWith('--')) {
      const key = token.slice(2);
      const value = rest[i + 1];
      opts[key] = value;
      i += 1;
    }
  }
  return { command: command || 'help', opts };
}

function runCheck(opts) {
  if (!opts.config || opts.lat === undefined || opts.lng === undefined) {
    console.error('check requires --config, --lat and --lng');
    return 1;
  }

  const configPath = path.resolve(process.cwd(), opts.config);
  const fences = loadGeofencesFromFile(configPath);
  const point = { lat: parseFloat(opts.lat), lng: parseFloat(opts.lng) };
  const speed = opts.speed !== undefined ? parseFloat(opts.speed) : 0;

  const targets = opts.fence ? fences.filter((f) => f.name === opts.fence) : fences;

  if (opts.fence && targets.length === 0) {
    console.error(`no fence named "${opts.fence}" found in ${opts.config}`);
    return 1;
  }

  targets.forEach((fence) => {
    const result = shouldTriggerAlert(point, speed, fence);
    const status = result.shouldAlert ? 'ALERT' : 'quiet';
    log.info(
      `${fence.name || '(unnamed)'}: ${status}  dist=${formatDistance(result.distanceMeters)}  eta=${formatEta(result.etaSeconds)}  reason=${result.reason}`
    );
  });

  return 0;
}

function parseRoute(routeStr) {
  return routeStr.split(';').filter(Boolean).map((pair) => {
    const [lat, lng] = pair.split(',').map((n) => parseFloat(n.trim()));
    return { lat, lng };
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runWatch(opts) {
  if (!opts.config || !opts.route) {
    console.error('watch requires --config and --route');
    return 1;
  }

  const configPath = path.resolve(process.cwd(), opts.config);
  const fences = loadGeofencesFromFile(configPath);
  const route = parseRoute(opts.route);
  const speed = opts.speed !== undefined ? parseFloat(opts.speed) : 5;
  const intervalMs = opts['interval-ms'] !== undefined ? parseInt(opts['interval-ms'], 10) : 500;

  const alerted = new Set();

  for (const point of route) {
    fences.forEach((fence) => {
      const result = shouldTriggerAlert(point, speed, fence);
      const key = fence.name || JSON.stringify(fence.center);
      if (result.shouldAlert && !alerted.has(key)) {
        alerted.add(key);
        log.info(`ALERT fired for "${key}" — dist=${formatDistance(result.distanceMeters)} eta=${formatEta(result.etaSeconds)}`);
      } else {
        log.debug(`${key}: dist=${formatDistance(result.distanceMeters)} eta=${formatEta(result.etaSeconds)}`);
      }
    });
    // eslint-disable-next-line no-await-in-loop
    await sleep(intervalMs);
  }

  log.info(`watch finished — ${alerted.size} fence(s) alerted across ${route.length} tick(s)`);
  return 0;
}

async function main(argv) {
  const { command, opts } = parseArgs(argv);

  switch (command) {
    case 'help':
    case undefined:
      console.log(USAGE);
      return 0;
    case 'check':
      return runCheck(opts);
    case 'watch':
      return runWatch(opts);
    default:
      log.warn(`unknown or not-yet-implemented command: "${command}"`);
      console.log(USAGE);
      return 1;
  }
}

if (require.main === module) {
  main(process.argv.slice(2)).then((code) => process.exit(code));
}

module.exports = { main, parseArgs, USAGE, runCheck, runWatch, parseRoute };
