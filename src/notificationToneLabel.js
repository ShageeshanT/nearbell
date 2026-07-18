export function notificationToneLabel(tone = 'balanced') {
  const value = String(tone).toLowerCase();
  if (value === 'quiet') return 'Quiet notification tone';
  if (value === 'urgent') return 'Urgent notification tone';
  if (value === 'friendly') return 'Friendly notification tone';
  return 'Balanced notification tone';
}
