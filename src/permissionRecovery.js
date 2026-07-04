export function permissionRecoveryStep(permission = 'prompt') {
  if (permission === 'granted') return 'ready';
  if (permission === 'denied') return 'open-browser-settings';
  return 'show-permission-prompt';
}
