export function mapProviderLabel(provider = 'google') {
  const labels = { google: 'Google Maps', apple: 'Apple Maps', manual: 'Manual route' };
  return labels[provider] || 'Map provider';
}
