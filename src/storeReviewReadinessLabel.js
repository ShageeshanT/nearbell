export function storeReviewReadinessLabel(score = 0) {
  const value = Number(score);
  if (!Number.isFinite(value) || value < 40) return 'Store review not ready';
  if (value < 75) return 'Store review needs polish';
  return 'Store review ready';
}
