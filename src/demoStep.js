export function demoStepLabel(step = 1) {
  const value = Number(step);
  if (!Number.isFinite(value) || value <= 1) return 'Open Maps and choose a destination';
  if (value === 2) return 'Set custom arrival alert times';
  if (value === 3) return 'Confirm notification permission';
  return 'Watch NearBell ring before arrival';
}
