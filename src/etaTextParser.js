export function etaTextParser(text = '') {
  const match = String(text).match(/(\d+)\s*(min|mins|minute|minutes)/i);
  if (!match) return null;
  return Number(match[1]);
}
