#!/usr/bin/env node
'use strict';

const { createLogger } = require('../src/logger');

const log = createLogger('cli');

const USAGE = `geofence-toolkit CLI

Usage:
  geofence-toolkit <command> [options]

Commands:
  check     Check a point against a geofence config (coming soon)
  watch     Simulate polling a moving point against a config (coming soon)
  help      Show this message

Run "geofence-toolkit help" for details once a command is implemented.
`;

function parseArgs(argv) {
  const [command, ...rest] = argv;
  return { command: command || 'help', rest };
}

function main(argv) {
  const { command } = parseArgs(argv);

  switch (command) {
    case 'help':
    case undefined:
      console.log(USAGE);
      return 0;
    default:
      log.warn(`unknown or not-yet-implemented command: "${command}"`);
      console.log(USAGE);
      return 1;
  }
}

if (require.main === module) {
  process.exit(main(process.argv.slice(2)));
}

module.exports = { main, parseArgs, USAGE };
