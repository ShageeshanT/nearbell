// Decays alert confidence the longer a location fix has been stale
export function decayedConfidence(baseConfidence, staleSeconds) {
  const decay = Math.min(staleSeconds / 60, 1) * 0.5;
  return Math.max(0, Math.round((baseConfidence - decay) * 100) / 100);
}
