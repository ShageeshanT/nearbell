export function smoothSpeed(previousSpeed, currentSpeed, alpha = 0.3) {
  return previousSpeed + alpha * (currentSpeed - previousSpeed);
}
