export function getNextWakeInterval(etaMinutes) { return etaMinutes > 30 ? 15 * 60000 : 5 * 60000; }
