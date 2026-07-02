export function notificationTag(routeId, offset) {
  const route = String(routeId || 'route').trim() || 'route';
  const minutes = Math.max(0, Math.round(Number(offset) || 0));
  return `nearbell:${route}:${minutes}`;
}
