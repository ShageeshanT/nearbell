import { createRouteSnapshot } from './routeSnapshot.js';
export function createManualRoute({ destination, etaMinutes }) { return createRouteSnapshot({ destination, etaMinutes, distanceMeters: 0 }); }
export function updateManualEta(route, etaMinutes) { return { ...route, etaMinutes: Number(etaMinutes), capturedAt: Date.now() }; }
