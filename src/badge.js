export function badgeText(etaMinutes) { const eta = Math.max(0, Math.round(Number(etaMinutes))); return eta > 99 ? '99+' : String(eta); }
