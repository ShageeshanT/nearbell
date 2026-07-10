export function manualCheckItem(area = 'popup') {
  const value = String(area).toLowerCase();
  if (value.includes('maps')) return 'Open a Google Maps route and confirm ETA text is visible.';
  if (value.includes('alarm')) return 'Trigger a short test alert and confirm the notification appears.';
  return 'Open the NearBell popup and confirm presets are visible.';
}
