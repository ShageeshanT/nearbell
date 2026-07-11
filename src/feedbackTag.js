export function feedbackTag(text = '') {
  const value = String(text).toLowerCase();
  if (value.includes('late') || value.includes('missed')) return 'timing';
  if (value.includes('confusing') || value.includes('unclear')) return 'usability';
  if (value.includes('permission')) return 'browser-permission';
  return 'general';
}
