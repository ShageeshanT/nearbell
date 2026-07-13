export function testerResultLabel(result = 'pending') {
  const value = String(result).toLowerCase();
  if (value === 'pass') return 'Tester passed the route alert check';
  if (value === 'fail') return 'Tester found a route alert issue';
  return 'Tester result pending';
}
