export function bearingDifference(a = 0, b = 0) { const delta = Math.abs(((Number(a) - Number(b) + 540) % 360) - 180); return delta; }
