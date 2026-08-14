// Downgrades a normal alert to silent delivery during user-defined quiet hours
export function effectivePriority(basePriority, inQuietHours) {
  return inQuietHours ? "low" : basePriority;
}
