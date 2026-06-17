import test from 'node:test';
import assert from 'node:assert/strict';
import { simulateRoute } from '../demo/simulator.js';
test('simulator fires alerts', () => { const alerts = simulateRoute(16,1,[15,5]).flatMap((step) => step.alerts); assert.deepEqual(alerts.map((a) => a.offset), [15,5]); });
