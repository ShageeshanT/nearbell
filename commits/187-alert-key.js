export function alertKey(tripId, type = 'arrival') { return `${String(tripId || 'unknown')}:${type}`; }
