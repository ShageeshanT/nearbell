// Maps a vehicle's occupancy level to a UI indicator color.
function occupancyColor(level) {
  const map = { low: '#2ecc71', moderate: '#f1c40f', full: '#e74c3c' };
  return map[level] || '#95a5a6';
}

module.exports = { occupancyColor };
