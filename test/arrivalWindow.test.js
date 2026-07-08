import test from 'node:test';
import assert from 'node:assert/strict';
import { arrivalWindow } from '../src/arrivalWindow.js';

test('arrivalWindow marks now window', () => {
  assert.equal(arrivalWindow(1), 'now');
});

test('arrivalWindow handles later arrivals', () => {
  assert.equal(arrivalWindow(18), 'later');
});
