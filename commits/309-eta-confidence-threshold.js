// Decides whether an ETA is trustworthy enough to trigger an arrival alert
export function isEtaTrustworthy(confidence, minConfidence = 0.6) {
  return confidence >= minConfidence;
}
