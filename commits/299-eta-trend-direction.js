// Reports whether ETA is improving, worsening, or holding steady vs the last reading
export function etaTrend(previousEta, currentEta, toleranceMinutes = 1) {
  const delta = currentEta - previousEta;
  if (Math.abs(delta) <= toleranceMinutes) return "steady";
  return delta < 0 ? "improving" : "worsening";
}
