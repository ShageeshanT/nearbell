export function routeComplete(distanceMeters = Infinity, finishRadius = 150) { return Number(distanceMeters) >= 0 && Number(distanceMeters) <= finishRadius; }
