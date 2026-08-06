'use strict';

const assert = require('assert');
const path = require('path');
const { parseArgs, parseRoute, runCheck } = require('../bin/cli');

function run() {
  // parseArgs basics
  const a = parseArgs(['check', '--config', 'x.json', '--lat', '1', '--lng', '2']);
  assert.strictEqual(a.command, 'check');
  assert.strictEqual(a.opts.config, 'x.json');
  assert.strictEqual(a.opts.lat, '1');

  // No command -> defaults to help
  const b = parseArgs([]);
  assert.strictEqual(b.command, 'help');

  // parseRoute
  const route = parseRoute('1.1,2.2;3.3,4.4');
  assert.deepStrictEqual(route, [
    { lat: 1.1, lng: 2.2 },
    { lat: 3.3, lng: 4.4 },
  ]);

  // runCheck against the real example config, near "home"
  const configPath = path.join(__dirname, '..', 'config', 'example.json');
  const code = runCheck({ config: configPath, lat: '6.9271', lng: '79.8612', speed: '2' });
  assert.strictEqual(code, 0);

  // runCheck with missing required args -> error code 1
  const badCode = runCheck({ config: configPath });
  assert.strictEqual(badCode, 1);

  console.log('cli.test.js OK');
}

module.exports = run;

if (require.main === module) run();
