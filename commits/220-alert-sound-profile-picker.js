export function pickSoundProfile(severity) {
  if (severity >= 3) return 'urgent-chime';
  if (severity === 2) return 'standard-ping';
  return 'soft-tone';
}
