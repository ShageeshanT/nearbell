export function notificationRetryLabel(count = 0) {
  const value = Number(count);
  if (!Number.isFinite(value) || value <= 0) return 'No notification retries yet';
  if (value === 1) return '1 notification retry';
  return `${value} notification retries`;
}
