export function buildNotification({ title = 'NearBell', message, destination }) { return { type: 'basic', iconUrl: 'icons/icon-128.png', title, message: destination ? `${message} Destination: ${destination}` : message }; }
export async function notify(notifier, payload) { return notifier.create(buildNotification(payload)); }
