import test from 'node:test';
import assert from 'node:assert/strict';
import { createAlertTelemetry } from '../src/alertTelemetry.js';

test('add local alert telemetry shape', () => {
  assert.deepEqual(createAlertTelemetry("fire", "r1", 5), { event: "fire", routeId: "r1", minutes: 5, source: "nearbell" });
});
