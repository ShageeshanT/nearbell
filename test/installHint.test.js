import test from 'node:test';
import assert from 'node:assert/strict';
import { installHint } from '../src/installHint.js';

test('installHint handles Chrome installs', () => {
  assert.equal(installHint('chrome'), 'Open Chrome extensions and load the unpacked NearBell build.');
});

test('installHint handles Brave installs', () => {
  assert.equal(installHint('brave'), 'Open Brave extensions and load the unpacked NearBell build.');
});
