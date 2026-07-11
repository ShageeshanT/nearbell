import test from 'node:test';
import assert from 'node:assert/strict';
import { feedbackTag } from '../src/feedbackTag.js';

test('feedbackTag detects timing feedback', () => {
  assert.equal(feedbackTag('the alert was late'), 'timing');
});

test('feedbackTag defaults to general feedback', () => {
  assert.equal(feedbackTag('nice app'), 'general');
});
