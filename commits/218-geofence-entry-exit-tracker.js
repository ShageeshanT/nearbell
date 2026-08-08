export function fenceTransition(wasInside, isInside) {
  if (!wasInside && isInside) return 'entered';
  if (wasInside && !isInside) return 'exited';
  return 'unchanged';
}
