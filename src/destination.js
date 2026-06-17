export function sanitizeDestinationLabel(label) { return String(label || 'your destination').replace(/\s+/g, ' ').trim().slice(0, 120) || 'your destination'; }
