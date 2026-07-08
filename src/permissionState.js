export function permissionStateLabel(state = 'prompt') {
  if (state === 'granted') return 'enabled';
  if (state === 'denied') return 'blocked';
  return 'needs-permission';
}
