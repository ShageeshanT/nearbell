export function batteryHint(etaMinutes = 0, batteryLevel = 1) {
  const level = Math.max(0, Math.min(1, Number(batteryLevel)));
  const eta = Math.max(0, Number(etaMinutes) || 0);
  if (level < 0.2) return eta > 10 ? 'Plug in soon to keep arrival alerts alive.' : 'Battery low; arrival alerts may not fire.';
  if (level < 0.4) return 'Battery getting low; consider charging for the trip.';
  return '';
}