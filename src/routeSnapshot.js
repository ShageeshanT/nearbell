export function createRouteSnapshot({ etaMinutes, distanceMeters = 0, destination = 'Unknown destination', capturedAt = Date.now() }) { return { etaMinutes: Number(etaMinutes), distanceMeters: Number(distanceMeters), destination, capturedAt }; }
export function isRouteActive(snapshot) { return Boolean(snapshot && Number.isFinite(snapshot.etaMinutes) && snapshot.etaMinutes > 0); }
