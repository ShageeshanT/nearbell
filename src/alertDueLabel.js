export function alertDueLabel(minutes = 0) {
  const value = Number(minutes);
  if (!Number.isFinite(value) || value <= 0) return 'Alert time unknown';
  if (value === 1) return '1 minute before arrival';
  return `${value} minutes before arrival`;
}
