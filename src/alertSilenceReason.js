export function alertSilenceReason({ quietHours = false, permission = 'granted', muted = false } = {}) {
  if (muted) return 'muted';
  if (quietHours) return 'quiet-hours';
  if (permission !== 'granted') return 'permission-blocked';
  return null;
}
