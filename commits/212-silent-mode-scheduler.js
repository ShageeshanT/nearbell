export function isSilentHour(hour24, silentStart = 22, silentEnd = 7) {
  if (silentStart > silentEnd) return hour24 >= silentStart || hour24 < silentEnd;
  return hour24 >= silentStart && hour24 < silentEnd;
}
