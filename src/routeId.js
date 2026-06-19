export function createRouteId(destination, startedAt) {
  return `${destination}`.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-") + `-${startedAt || "now"}`;
}
