export function arrivalUrgencyLabel(minutes = 0) {
  const value = Number(minutes);
  if (!Number.isFinite(value) || value <= 0) return 'Arrival urgency unknown';
  if (value <= 3) return 'Arriving any moment';
  if (value <= 10) return 'Arrival soon';
  return 'Arrival later';
}
