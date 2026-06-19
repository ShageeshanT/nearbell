export function redactDestination(destination, enabled = false) {
  return enabled ? "Saved destination" : destination;
}
