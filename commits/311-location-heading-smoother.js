// Smooths heading readings across the wraparound at 0/360 degrees
export function smoothHeading(prevHeading, newHeading, alpha = 0.4) {
  let delta = newHeading - prevHeading;
  delta = ((delta + 180) % 360 + 360) % 360 - 180;
  return (prevHeading + alpha * delta + 360) % 360;
}
