// Ranks pending alerts so the soonest, highest-confidence arrival surfaces first
export function rankAlerts(alerts) {
  return [...alerts].sort((a, b) => a.etaMinutes - b.etaMinutes || b.confidence - a.confidence);
}
