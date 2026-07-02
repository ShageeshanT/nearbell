import test from 'node:test';
import assert from 'node:assert/strict';
import { routeMilestone } from '../src/routeMilestone.js';

test('labels route progress milestones', () => {
  assert.equal(routeMilestone(0.2), 'getting started');
  assert.equal(routeMilestone(0.6), 'halfway');
  assert.equal(routeMilestone(0.95), 'final stretch');
});
