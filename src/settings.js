export const DEFAULT_SETTINGS = { enabled: true, presetId: 'commute', customOffsetsMinutes: [15, 5], sound: 'soft-bell', vibration: true, quietHours: null };
export function mergeSettings(saved = {}) { return { ...DEFAULT_SETTINGS, ...saved }; }
