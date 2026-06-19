import test from 'node:test';
import assert from 'node:assert/strict';
import { alertKey } from '../src/alertDeduper.js';

test('add alert dedupe key helper', () => {
  assert.deepEqual(alertKey("home", 5), "home:5");
});
