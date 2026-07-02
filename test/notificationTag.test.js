import test from 'node:test';
import assert from 'node:assert/strict';
import { notificationTag } from '../src/notificationTag.js';

test('builds stable notification tags', () => {
  assert.equal(notificationTag('home', 15), 'nearbell:home:15');
  assert.equal(notificationTag('', 4.6), 'nearbell:route:5');
});
