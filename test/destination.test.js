import test from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeDestinationLabel } from '../src/destination.js';
test('sanitizes destination labels', () => { assert.equal(sanitizeDestinationLabel('  Home   Base  '), 'Home Base'); });
