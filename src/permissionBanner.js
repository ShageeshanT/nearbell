export function permissionBanner(state) {
  if (state === 'granted') return 'NearBell alerts are ready.';
  if (state === 'denied') return 'Enable notifications in browser settings.';
  return 'Allow notifications to hear arrival alerts.';
}
