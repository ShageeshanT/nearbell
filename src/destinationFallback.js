export function destinationFallback(input = '', detected = '') {
  const manual = String(input).trim();
  const auto = String(detected).trim();
  return manual || auto || 'Choose a destination';
}
