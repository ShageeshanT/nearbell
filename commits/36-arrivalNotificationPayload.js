/**
 * Builds the payload sent to the push notification service
 * when a tracked stop's arrival crosses the alert threshold.
 */
function buildArrivalPayload(stop, etaMinutes) {
  return {
    title: `${stop.name} arriving soon`,
    body: etaMinutes <= 1 ? 'Arriving now' : `${Math.round(etaMinutes)} min away`,
    data: { stopId: stop.id, etaMinutes },
  };
}

module.exports = { buildArrivalPayload };
