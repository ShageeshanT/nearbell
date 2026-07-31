// Rejects GPS speed readings that are physically implausible for a road vehicle.
function isPlausibleSpeed(speedKmh, maxPlausibleKmh = 120) {
  return speedKmh >= 0 && speedKmh <= maxPlausibleKmh;
}

module.exports = { isPlausibleSpeed };
