export function routeConfidence({ fresh = false, coordinates = false, eta = false } = {}) { return [fresh, coordinates, eta].filter(Boolean).length / 3; }
