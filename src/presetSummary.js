export function presetSummary(preset = {}) {
  const offsets = preset.offsets || []; return offsets.length ? offsets.join(", ") + " min alerts" : "No alerts configured";
}
