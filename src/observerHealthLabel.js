export function observerHealthLabel(state = 'idle') {
  const value = String(state).toLowerCase();
  if (value === 'active') return 'Maps observer active';
  if (value === 'stale') return 'Maps observer needs refresh';
  if (value === 'blocked') return 'Maps observer blocked';
  return 'Maps observer idle';
}
