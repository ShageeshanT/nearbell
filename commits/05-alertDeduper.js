export function createAlertDeduper(windowSize = 5) {
  const seen = [];
  return function dedupe(text) {
    const key = String(text || '').trim().toLowerCase();
    if (!key) return false;
    if (seen.includes(key)) return true;
    seen.push(key);
    if (seen.length > windowSize) seen.shift();
    return false;
  };
}