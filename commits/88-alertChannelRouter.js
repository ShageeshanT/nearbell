// Routes an alert to push/SMS/in-app channels based on user preference and urgency.
function pickChannels(preferences, urgency) {
  const channels = [];
  if (preferences.push) channels.push('push');
  if (preferences.sms && urgency === 'high') channels.push('sms');
  if (preferences.inApp !== false) channels.push('in_app');
  return channels;
}

module.exports = { pickChannels };
