export function exportSettings(settings = {}) {
  return JSON.stringify({ version: 1, settings }, null, 2);
}
