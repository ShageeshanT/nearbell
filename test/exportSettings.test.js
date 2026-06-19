import test from 'node:test';
        import assert from 'node:assert/strict';
        import { exportSettings } from '../src/exportSettings.js';

        test('add settings export helper', () => {
          assert.deepEqual(exportSettings({ quietHours: true }), `{
  "version": 1,
  "settings": {
    "quietHours": true
  }
}`);
        });
