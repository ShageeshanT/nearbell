// Flags a location fix reported by a known mock/fake-GPS provider
export function isMockLocation(fix) {
  return Boolean(fix && fix.isMocked === true);
}
