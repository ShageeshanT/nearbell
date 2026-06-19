export function sessionAgeMinutes(startedAtMs, nowMs = Date.now()) {
  return Math.max(0, Math.floor((nowMs - startedAtMs) / 60000));
}
