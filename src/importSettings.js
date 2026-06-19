export function importSettings(raw) {
  const parsed = JSON.parse(raw); return parsed.settings || parsed;
}
