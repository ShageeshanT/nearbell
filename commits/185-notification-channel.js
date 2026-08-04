export function notificationChannel({ push = true, sms = false } = {}) { return push ? 'push' : sms ? 'sms' : 'none'; }
