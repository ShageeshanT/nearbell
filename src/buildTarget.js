export function buildTargetName(target = 'extension') {
  const value = String(target).trim().toLowerCase();
  if (value === 'zip') return 'extension zip';
  if (value === 'store') return 'store package';
  return 'unpacked extension';
}
