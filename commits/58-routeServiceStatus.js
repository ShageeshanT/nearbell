/**
 * Maps a route's raw service status code to a rider-facing
 * label and severity for banner display.
 */
function serviceStatusInfo(code) {
  switch (code) {
    case 'suspended':
      return { label: 'Service suspended', severity: 'critical' };
    case 'delayed':
      return { label: 'Delays reported', severity: 'warning' };
    case 'detour':
      return { label: 'Detour in effect', severity: 'warning' };
    default:
      return { label: 'Running normally', severity: 'ok' };
  }
}

module.exports = { serviceStatusInfo };
