/**
 * Smooths a stream of raw heading readings using circular averaging, so
 * direction-of-travel indicators don't jitter between fixes.
 */
function stabilizeHeading(previousHeading, newHeading, weight = 0.3) {
  if (previousHeading == null) {
    return newHeading;
  }

  const diff = ((newHeading - previousHeading + 540) % 360) - 180;
  const blended = (previousHeading + diff * weight + 360) % 360;

  return Math.round(blended * 10) / 10;
}

module.exports = { stabilizeHeading };
