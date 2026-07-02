export function alertWindowLabel(minutes) {
  const value = Math.max(0, Math.round(Number(minutes) || 0));
  if (value === 0) return 'at arrival';
  if (value === 1) return '1 min before arrival';
  return `${value} mins before arrival`;
}
