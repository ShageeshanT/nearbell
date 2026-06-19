export function createAlertTelemetry(event, routeId, minutes) {
  return { event, routeId, minutes, source: "nearbell" };
}
