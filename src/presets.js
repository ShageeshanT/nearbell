export const DEFAULT_PRESETS = [
  { id: 'commute', label: 'Commute', offsetsMinutes: [15, 5] },
  { id: 'delivery', label: 'Delivery', offsetsMinutes: [20, 10, 3] },
  { id: 'nap-safe', label: 'Nap safe', offsetsMinutes: [30, 15, 5, 1] }
];
export function getPreset(id) { return DEFAULT_PRESETS.find((preset) => preset.id === id) || null; }
