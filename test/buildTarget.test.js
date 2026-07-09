import test from 'node:test';
import assert from 'node:assert/strict';
import { buildTargetName } from '../src/buildTarget.js';

test('buildTargetName labels zip packages', () => {
  assert.equal(buildTargetName('zip'), 'extension zip');
});

test('buildTargetName labels default package', () => {
  assert.equal(buildTargetName(), 'unpacked extension');
});
