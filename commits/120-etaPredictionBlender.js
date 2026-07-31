// Blends a schedule-based ETA with a live GPS-based ETA using a confidence weight.
function blendEta(scheduleEtaMinutes, liveEtaMinutes, liveConfidence = 0.7) {
  return scheduleEtaMinutes * (1 - liveConfidence) + liveEtaMinutes * liveConfidence;
}

module.exports = { blendEta };
