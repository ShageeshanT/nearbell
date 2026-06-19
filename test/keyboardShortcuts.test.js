import test from 'node:test';
import assert from 'node:assert/strict';
import { keyboardShortcut } from '../src/keyboardShortcuts.js';

test('add keyboard shortcut helper', () => {
  assert.deepEqual(keyboardShortcut("toggle"), "Alt+N");
});
