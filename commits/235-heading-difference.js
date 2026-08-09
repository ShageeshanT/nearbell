export function headingDifference(headingA, headingB) {
  const diff = Math.abs(headingA - headingB) % 360;
  return diff > 180 ? 360 - diff : diff;
}
