'use strict';

const LEVELS = ['debug', 'info', 'warn', 'error'];

function createLogger(prefix = 'geofence-toolkit') {
  function log(level, ...args) {
    if (!LEVELS.includes(level)) level = 'info';
    const ts = new Date().toISOString();
    const line = `[${ts}] [${prefix}] [${level.toUpperCase()}]`;
    // eslint-disable-next-line no-console
    console[level === 'debug' ? 'log' : level](line, ...args);
  }

  return {
    debug: (...args) => log('debug', ...args),
    info: (...args) => log('info', ...args),
    warn: (...args) => log('warn', ...args),
    error: (...args) => log('error', ...args),
  };
}

module.exports = { createLogger, LEVELS };
