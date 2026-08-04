export function tripElapsedMinutes(startedAt, now = Date.now()) { return startedAt ? Math.max(0, Math.floor((now - Number(startedAt)) / 60000)) : 0; }
