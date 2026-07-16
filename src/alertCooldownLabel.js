export function alertCooldownLabel(seconds = 0) {
  const value = Number(seconds);
  if (!Number.isFinite(value) || value <= 0) return 'Alert cooldown off';
  if (value < 60) return 'Short alert cooldown';
  if (value <= 300) return 'Standard alert cooldown';
  return 'Extended alert cooldown';
}
