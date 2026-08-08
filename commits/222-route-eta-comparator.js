export function fasterRoute(routeA, routeB) {
  return routeA.etaMinutes <= routeB.etaMinutes ? routeA : routeB;
}
