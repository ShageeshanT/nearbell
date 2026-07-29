/**
 * Summarizes a batch of alerts fired close together into one
 * digest line, e.g. "3 buses arriving in the next 10 minutes".
 */
function summarizeAlertBatch(alerts) {
  if (alerts.length === 0) return '';
  if (alerts.length === 1) return alerts[0].title;

  const maxEta = Math.max(...alerts.map((a) => a.etaMinutes));
  return `${alerts.length} buses arriving in the next ${Math.ceil(maxEta)} minutes`;
}

module.exports = { summarizeAlertBatch };
