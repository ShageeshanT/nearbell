// Returns an earliest/latest arrival window given ETA and a confidence buffer
export function arrivalWindow(etaMinutes, bufferMinutes = 3) {
  return { earliest: Math.max(0, etaMinutes - bufferMinutes), latest: etaMinutes + bufferMinutes };
}
