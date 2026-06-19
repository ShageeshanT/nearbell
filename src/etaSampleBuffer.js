export function addEtaSample(samples = [], sample, limit = 5) {
  return [...samples, sample].slice(-limit);
}
