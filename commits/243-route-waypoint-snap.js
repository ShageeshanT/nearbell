export function snapToNearestWaypoint(position, waypoints) {
  let nearest = null;
  let minDist = Infinity;
  for (const wp of waypoints) {
    const d = Math.hypot(position.x - wp.x, position.y - wp.y);
    if (d < minDist) {
      minDist = d;
      nearest = wp;
    }
  }
  return nearest;
}
