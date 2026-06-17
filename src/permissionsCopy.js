export const PERMISSION_COPY = { notifications: 'Needed to ring when your destination is close.', storage: 'Needed to save your custom alert times.', activeTab: 'Needed to read route timing from the active Maps tab only when used.' };
export function explainPermission(permission) { return PERMISSION_COPY[permission] || 'Permission used by NearBell features.'; }
