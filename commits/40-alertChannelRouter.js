/**
 * Decides which delivery channel (push, sms, in-app) an alert
 * should use based on user preferences and urgency.
 */
function routeAlertChannel(urgency, preferences) {
  if (urgency === 'critical' && preferences.smsEnabled) return 'sms';
  if (preferences.pushEnabled) return 'push';
  return 'in-app';
}

module.exports = { routeAlertChannel };
