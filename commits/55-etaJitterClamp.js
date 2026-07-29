/**
 * Clamps how much the displayed ETA can jump between two
 * consecutive updates, to avoid jarring UI flicker.
 */
function clampEtaJump(previousEta, nextEta, maxJumpMinutes = 2) {
  if (previousEta == null) return nextEta;
  const diff = nextEta - previousEta;
  if (Math.abs(diff) <= maxJumpMinutes) return nextEta;
  return previousEta + Math.sign(diff) * maxJumpMinutes;
}

module.exports = { clampEtaJump };
