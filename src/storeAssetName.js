export function storeAssetName(asset = 'icon') {
  const value = String(asset).toLowerCase();
  if (value.includes('screenshot')) return 'Chrome Web Store screenshot';
  if (value.includes('promo')) return 'Small promotional tile';
  return 'NearBell extension icon';
}
