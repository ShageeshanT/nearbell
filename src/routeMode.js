export function routeModeLabel(mode = 'driving') {
  if (mode === 'walking') return 'walking route';
  if (mode === 'transit') return 'transit route';
  if (mode === 'cycling') return 'cycling route';
  return 'driving route';
}
