'use strict';

// Tiny dependency-free test runner: each test/*.test.js file exports a
// function that throws on failure and logs "<name> OK" on success.

const fs = require('fs');
const path = require('path');

const testDir = __dirname;
const files = fs
  .readdirSync(testDir)
  .filter((f) => f.endsWith('.test.js'))
  .sort();

let failures = 0;

for (const file of files) {
  const testFn = require(path.join(testDir, file));
  try {
    testFn();
  } catch (err) {
    failures += 1;
    console.error(`FAILED: ${file}`);
    console.error(err);
  }
}

if (failures > 0) {
  console.error(`\n${failures}/${files.length} test file(s) failed`);
  process.exit(1);
}

console.log(`\nAll ${files.length} test file(s) passed`);
