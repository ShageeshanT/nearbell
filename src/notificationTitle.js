export function buildNotificationTitle(destination, minutes) {
  const m = Math.max(0, Math.round(Number(minutes) || 0)); return m === 0 ? `Arriving at ${destination}` : `${m} min to ${destination}`;
}
