export function rejectOutlierEta(candidateMinutes, medianMinutes, maxDeviation = 20) {
  return Math.abs(candidateMinutes - medianMinutes) <= maxDeviation;
}
