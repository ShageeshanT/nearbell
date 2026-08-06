'use strict';

const assert = require('assert');
const { estimateEtaSeconds, kmhToMs, formatEta } = require('../src/eta');

function run() {
  // 1000m at 10 m/s -> 100s
  assert.strictEqual(estimateEtaSeconds(1000, 10), 100);

  // Not moving -> Infinity
  assert.strictEqual(estimateEtaSeconds(1000, 0), Infinity);

  // Already arrived -> 0
  assert.strictEqual(estimateEtaSeconds(0, 5), 0);

  // 36 km/h -> 10 m/s
  assert.strictEqual(kmhToMs(36), 10);

  assert.strictEqual(formatEta(45), '45s');
  assert.strictEqual(formatEta(120), '2m');
  assert.strictEqual(formatEta(3900), '1h 5m');
  assert.strictEqual(formatEta(Infinity), '—');

  console.log('eta.test.js OK');
}

module.exports = run;

if (require.main === module) run();
