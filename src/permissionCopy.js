export function permissionCopy(kind = 'notifications') {
  const value = String(kind).toLowerCase();
  if (value.includes('alarm')) return 'Allow alarms so NearBell can ring before arrival.';
  if (value.includes('storage')) return 'Allow storage so NearBell can remember alert presets.';
  return 'Allow notifications so NearBell can remind you before arrival.';
}
