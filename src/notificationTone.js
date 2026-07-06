export function notificationTone(priority = 'normal') {
  if (priority === 'critical') return 'persistent';
  if (priority === 'high') return 'sharp';
  if (priority === 'low') return 'soft';
  return 'balanced';
}
