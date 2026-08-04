export function speedBucket(kph = 0) { const value = Math.max(0, Number(kph)); return value < 3 ? 'stopped' : value < 25 ? 'slow' : value < 65 ? 'moving' : 'fast'; }
