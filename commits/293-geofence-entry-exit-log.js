// Appends a timestamped entry/exit event for a geofence to the audit trail
export function logFenceEvent(log, fenceId, type, atMs) {
  return [...log, { fenceId, type, atMs }];
}
