export function alertKey(routeId, offsetMinutes) {
  return `${routeId || "route"}:${Number(offsetMinutes)}`;
}
