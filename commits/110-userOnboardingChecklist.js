// Tracks completion of first-run onboarding steps for a new user.
const ONBOARDING_STEPS = ['grant_location', 'pick_home_stop', 'enable_notifications'];

function onboardingProgress(completedSteps) {
  const done = ONBOARDING_STEPS.filter(s => completedSteps.includes(s)).length;
  return { done, total: ONBOARDING_STEPS.length, complete: done === ONBOARDING_STEPS.length };
}

module.exports = { onboardingProgress, ONBOARDING_STEPS };
