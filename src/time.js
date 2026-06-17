export function minutesToMs(minutes) { return Math.round(Number(minutes) * 60000); }
export function msToWholeMinutes(ms) { return Math.max(0, Math.ceil(Number(ms) / 60000)); }
export function formatEta(minutes) { const value = Math.max(0, Math.round(Number(minutes))); return value === 1 ? '1 minute' : `${value} minutes`; }
