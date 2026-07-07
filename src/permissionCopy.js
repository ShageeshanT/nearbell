export function permissionCopy(permission = 'prompt') {
  if (permission === 'granted') return 'Arrival alerts are ready.';
  if (permission === 'denied') return 'Enable notifications to hear arrival alerts.';
  return 'Allow notifications so NearBell can ring before arrival.';
}
