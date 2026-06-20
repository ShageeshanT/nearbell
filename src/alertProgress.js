export function alertProgress(current, total) {
  return total ? Math.min(1, Math.max(0, current / total)) : 0;
}
