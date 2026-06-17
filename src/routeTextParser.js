export function parseEtaText(text) { const match = String(text).match(/(\d+)\s*(min|mins|minute|minutes)/i); return match ? Number(match[1]) : null; }
export function parseDistanceText(text) { const match = String(text).match(/(\d+(?:\.\d+)?)\s*(km|m)/i); if (!match) return null; return match[2].toLowerCase() === 'km' ? Number(match[1]) * 1000 : Number(match[1]); }
