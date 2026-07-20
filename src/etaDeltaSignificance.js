// Build a short, human-readable label that summarises the significance
// of an ETA delta in seconds. Used in arrival alert copy to explain
// whether the change is small, noticeable, or major.
export function etaDeltaSignificance(deltaSeconds) {
  if (deltaSeconds == null || Number.isNaN(deltaSeconds)) {
    return { tier: 'unknown', label: 'unchanged' };
  }
  const mag = Math.abs(deltaSeconds);
  if (mag < 30) return { tier: 'tiny', label: 'minor change' };
  if (mag < 120) return { tier: 'small', label: 'a minute or two' };
  if (mag < 300) return { tier: 'medium', label: 'a few minutes' };
  if (mag < 900) return { tier: 'large', label: 'several minutes' };
  return { tier: 'major', label: 'a much longer trip' };
}
