import test from 'node:test';
import assert from 'node:assert/strict';
import { alertToneLabel } from '../src/alertToneLabel.js';

test('alertToneLabel describes soft tones', () => {
  assert.equal(alertToneLabel(), 'Soft arrival chime');
});

test('alertToneLabel describes loud tones', () => {
  assert.equal(alertToneLabel('loud'), 'Loud arrival ring');
});
