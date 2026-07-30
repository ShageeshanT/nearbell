// Tracks lightweight session analytics like active duration and alert interaction counts.
function summarizeSession(session) {
  const durationMs = (session.endedAt || Date.now()) - session.startedAt;
  return {
    durationMinutes: Math.round(durationMs / 60000),
    alertsShown: session.alertsShown || 0,
    alertsActedOn: session.alertsActedOn || 0,
  };
}

module.exports = { summarizeSession };
