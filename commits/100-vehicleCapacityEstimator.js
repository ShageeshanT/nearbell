// Estimates remaining seating/standing capacity on a vehicle from occupancy sensor data.
function estimateRemainingCapacity(totalCapacity, currentOccupancy) {
  return Math.max(0, totalCapacity - currentOccupancy);
}

function capacityLevel(totalCapacity, currentOccupancy) {
  const ratio = currentOccupancy / totalCapacity;
  if (ratio < 0.5) return 'low';
  if (ratio < 0.85) return 'moderate';
  return 'full';
}

module.exports = { estimateRemainingCapacity, capacityLevel };
