export function releaseRiskLabel(level = 'low') {
  const value = String(level).toLowerCase();
  if (value === 'high') return 'Release risk high';
  if (value === 'medium') return 'Release risk needs review';
  return 'Release risk low';
}
