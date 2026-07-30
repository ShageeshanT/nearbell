// Estimates schedule delay by comparing live vehicle position to the expected schedule.
function estimateDelayMinutes(scheduledArrivalMs, livePredictedArrivalMs) {
  return Math.round((livePredictedArrivalMs - scheduledArrivalMs) / 60000);
}

function delayLabel(delayMinutes) {
  if (delayMinutes <= 0) return 'on_time';
  if (delayMinutes <= 3) return 'slightly_delayed';
  if (delayMinutes <= 10) return 'delayed';
  return 'severely_delayed';
}

module.exports = { estimateDelayMinutes, delayLabel };
