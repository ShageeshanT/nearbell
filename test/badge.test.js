import test from 'node:test';
import assert from 'node:assert/strict';
import { badgeText } from '../src/badge.js';
test('formats badge text', () => { assert.equal(badgeText(7), '7'); assert.equal(badgeText(120), '99+'); });
