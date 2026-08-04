export function distanceDisplay(meters = 0) { const value = Math.max(0, Number(meters)); return value < 1000 ? `${Math.round(value)} m` : `${(value / 1000).toFixed(1)} km`; }
