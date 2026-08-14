// Tracks how long a device has continuously stayed inside a geofence
export function dwellSeconds(enteredAtMs, nowMs) {
  return Math.max(0, Math.round((nowMs - enteredAtMs) / 1000));
}
