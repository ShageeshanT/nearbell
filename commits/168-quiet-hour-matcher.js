export function isQuietHour(hour, start = 22, end = 7) {
  const value = ((Number(hour) % 24) + 24) % 24;
  return start > end ? value >= start || value < end : value >= start && value < end;
}
