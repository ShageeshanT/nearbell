import test from 'node:test';
import assert from 'node:assert/strict';
import { storageKey } from '../src/storageKey.js';

test('storageKey builds namespaced keys', () => {
  assert.equal(storageKey('NearBell', 'Alerts'), 'nearbell:alerts');
});

test('storageKey uses defaults', () => {
  assert.equal(storageKey('', ''), 'nearbell:settings');
});
