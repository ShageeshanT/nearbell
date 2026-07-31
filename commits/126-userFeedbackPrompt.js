// Decides whether to show an in-app feedback prompt based on usage milestones.
function shouldShowFeedbackPrompt(sessionCount, lastPromptedAtSession) {
  const milestones = [5, 20, 50];
  return milestones.includes(sessionCount) && lastPromptedAtSession !== sessionCount;
}

module.exports = { shouldShowFeedbackPrompt };
