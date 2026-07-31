// Flags whether a stop has wheelchair-accessible ramp infrastructure.
function hasAccessRamp(stop) {
  return Boolean(stop.accessibilityTags && stop.accessibilityTags.includes('ramp'));
}

module.exports = { hasAccessRamp };
