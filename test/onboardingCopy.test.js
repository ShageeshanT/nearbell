import test from 'node:test';
import assert from 'node:assert/strict';
import { ONBOARDING_STEPS } from '../src/onboardingCopy.js';
test('has onboarding steps', () => { assert.ok(ONBOARDING_STEPS.length >= 3); });
