import test from 'node:test';
import assert from 'node:assert/strict';
import { feedbackPriorityLabel } from '../src/feedbackPriorityLabel.js';

test('feedbackPriorityLabel handles normal feedback', () => {
  assert.equal(feedbackPriorityLabel(), 'Review feedback during beta grooming');
});

test('feedbackPriorityLabel handles urgent feedback', () => {
  assert.equal(feedbackPriorityLabel('urgent'), 'Review feedback before next beta build');
});
