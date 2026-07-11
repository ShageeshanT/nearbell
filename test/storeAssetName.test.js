import test from 'node:test';
import assert from 'node:assert/strict';
import { storeAssetName } from '../src/storeAssetName.js';

test('storeAssetName describes icon assets', () => {
  assert.equal(storeAssetName(), 'NearBell extension icon');
});

test('storeAssetName describes screenshot assets', () => {
  assert.equal(storeAssetName('screenshot'), 'Chrome Web Store screenshot');
});
