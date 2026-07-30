// Smooths noisy ETA updates so the displayed countdown doesn't jump erratically.
function filterJitter(previousEta, newEta, maxJumpMinutes = 2) {
  const delta = newEta - previousEta;
  if (Math.abs(delta) <= maxJumpMinutes) return newEta;
  return previousEta + Math.sign(delta) * maxJumpMinutes;
}

module.exports = { filterJitter };
