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
  geofence-toolkit watch     Simulate polling a moving point against a config (coming soon)
  geofence-toolkit help      Show this message

check options:
  --config   Path to a geofences JSON file (see config/example.json)
  --lat      Current latitude
  --lng      Current longitude
  --speed    Current speed in m/s (default 0)
  --fence    Only check this fence by name (default: check all)
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

function main(argv) {
  const { command, opts } = parseArgs(argv);

  switch (command) {
    case 'help':
    case undefined:
      console.log(USAGE);
      return 0;
    case 'check':
      return runCheck(opts);
    default:
      log.warn(`unknown or not-yet-implemented command: "${command}"`);
      console.log(USAGE);
      return 1;
  }
}

if (require.main === module) {
  process.exit(main(process.argv.slice(2)));
}

module.exports = { main, parseArgs, USAGE, runCheck };
