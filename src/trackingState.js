export function trackingState(active, paused) {
  return paused ? "paused" : active ? "tracking" : "idle";
}
