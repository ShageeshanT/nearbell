export function arrivalNudge(minutes) {
  const value = Number(minutes);
  if (!Number.isFinite(value)) return 'Keep an eye on the route.';
  if (value <= 5) return 'Get ready to arrive.';
  if (value <= 15) return 'You are getting close.';
  return 'NearBell is watching the ETA.';
}
