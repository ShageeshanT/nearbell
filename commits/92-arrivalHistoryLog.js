// Keeps a bounded rolling history of recent arrival events for a stop.
function appendArrivalEvent(history, event, maxEntries = 50) {
  const updated = [...history, event];
  if (updated.length > maxEntries) updated.shift();
  return updated;
}

module.exports = { appendArrivalEvent };
