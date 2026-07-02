export function alertCountLabel(count) {
  const value = Math.max(0, Math.round(Number(count) || 0));
  if (value === 0) return 'No alerts set';
  if (value === 1) return '1 alert set';
  return `${value} alerts set`;
}
