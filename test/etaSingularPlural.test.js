import test from 'node:test';
import assert from 'node:assert/strict';
import { etaSingularPlural } from '../src/etaSingularPlural.js';

test('etaSingularPlural picks singular for one', () => {
  assert.equal(etaSingularPlural(1, 'minute', 'minutes'), 'minute');
});

test('etaSingularPlural picks plural for zero or many', () => {
  assert.equal(etaSingularPlural(0, 'minute', 'minutes'), 'minutes');
  assert.equal(etaSingularPlural(5, 'minute', 'minutes'), 'minutes');
});

test('etaSingularPlural ignores sign when deciding plurality', () => {
  assert.equal(etaSingularPlural(-1, 'minute', 'minutes'), 'minute');
  assert.equal(etaSingularPlural(-3, 'minute', 'minutes'), 'minutes');
});

test('etaSingularPlural falls back when invalid', () => {
  assert.equal(etaSingularPlural(NaN, 'minute', 'minutes'), 'minute');
  assert.equal(etaSingularPlural('three', 'minute', 'minutes'), 'minute');
});
