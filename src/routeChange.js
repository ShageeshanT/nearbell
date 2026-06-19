export function routeChanged(previous = {}, next = {}) {
  return previous.destination !== next.destination || previous.mode !== next.mode;
}
