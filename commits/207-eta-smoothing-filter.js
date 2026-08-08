export function smoothEta(prevEtaMinutes, newEtaMinutes, alpha = 0.3) {
  return prevEtaMinutes + alpha * (newEtaMinutes - prevEtaMinutes);
}
