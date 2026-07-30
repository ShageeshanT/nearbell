// Confidence in an ETA estimate decays the further out the prediction is.
function etaConfidence(minutesAway, halfLifeMinutes = 20) {
  const decay = Math.pow(0.5, minutesAway / halfLifeMinutes);
  return Math.max(0.1, Math.min(1, decay));
}

module.exports = { etaConfidence };
