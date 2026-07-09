import test from 'node:test';
import assert from 'node:assert/strict';
import { demoStepLabel } from '../src/demoStep.js';

test('demoStepLabel starts with Maps setup', () => {
  assert.equal(demoStepLabel(1), 'Open Maps and choose a destination');
});

test('demoStepLabel handles final demo step', () => {
  assert.equal(demoStepLabel(4), 'Watch NearBell ring before arrival');
});
