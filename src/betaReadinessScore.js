export function betaReadinessScore(items = {}) {
  const checks = ['tests', 'lint', 'build', 'manualPass'];
  const passed = checks.filter((key) => items[key] === true).length;
  return Math.round((passed / checks.length) * 100);
}
