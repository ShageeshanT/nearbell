export function locationAge(updatedAt, now = Date.now()) { return Math.max(0, Math.floor((now - Number(updatedAt)) / 1000)); }
