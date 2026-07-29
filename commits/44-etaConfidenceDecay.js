/**
 * Decays confidence in a stale ETA the longer it goes without
 * a fresh GPS update, so the UI can show a fading indicator.
 */
function confidenceForStaleness(secondsSinceUpdate, halfLifeSeconds = 30) {
  return Math.pow(0.5, secondsSinceUpdate / halfLifeSeconds);
}

module.exports = { confidenceForStaleness };
