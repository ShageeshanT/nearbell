export function etaDisplay(minutes = 0) { const value = Math.max(0, Math.round(Number(minutes))); return value < 60 ? `${value} min` : `${Math.floor(value / 60)}h ${value % 60}m`; }
