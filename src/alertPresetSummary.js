export function alertPresetSummary(presets = []) {
  const values = presets.map(Number).filter((value) => Number.isFinite(value) && value > 0);
  if (!values.length) return 'No arrival alerts configured';
  return `${values.sort((a, b) => b - a).join(', ')} minutes before arrival`;
}
