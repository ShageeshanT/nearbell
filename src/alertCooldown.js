export function alertCooldownSeconds(priority = 'normal') {
  if (priority === 'high') return 60;
  if (priority === 'low') return 300;
  return 180;
}
