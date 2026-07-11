export function alertToneLabel(tone = 'soft') {
  const value = String(tone).toLowerCase();
  if (value.includes('loud')) return 'Loud arrival ring';
  if (value.includes('silent')) return 'Visual arrival reminder';
  return 'Soft arrival chime';
}
