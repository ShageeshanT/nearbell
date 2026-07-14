import test from 'node:test';
import assert from 'node:assert/strict';
import { releaseRiskLabel } from '../src/releaseRiskLabel.js';

test('releaseRiskLabel handles low risk', () => {
  assert.equal(releaseRiskLabel(), 'Release risk low');
});

test('releaseRiskLabel handles medium risk', () => {
  assert.equal(releaseRiskLabel('medium'), 'Release risk needs review');
});
