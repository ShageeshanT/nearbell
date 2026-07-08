export function storageKey(scope = 'nearbell', name = 'settings') {
  const safeScope = String(scope).trim() || 'nearbell';
  const safeName = String(name).trim() || 'settings';
  return `${safeScope}:${safeName}`.toLowerCase();
}
