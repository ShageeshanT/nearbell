export function routePaused(lastMovementAt, now = Date.now(), pauseMinutes = 8) {
  return Boolean(lastMovementAt) && now - Number(lastMovementAt) >= pauseMinutes * 60_000;
}
