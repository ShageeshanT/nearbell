export function shouldRecalibrateEta(lastEtaMinutes, actualElapsedMinutes) {
  return Math.abs(actualElapsedMinutes - lastEtaMinutes) > lastEtaMinutes * 0.25;
}
