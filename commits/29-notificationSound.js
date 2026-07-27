/**
 * Picks a notification sound key based on alert urgency level.
 */
function soundForUrgency(urgency) {
  switch (urgency) {
    case 'critical':
      return 'alert_urgent.wav';
    case 'high':
      return 'alert_high.wav';
    case 'low':
      return 'alert_soft.wav';
    default:
      return 'alert_default.wav';
  }
}

module.exports = { soundForUrgency };
