export function testerTaskLabel(task = 'install') {
  const value = String(task).toLowerCase();
  if (value.includes('route')) return 'Start a route and watch the ETA';
  if (value.includes('alert')) return 'Confirm the alert fires at the preset time';
  return 'Install the unpacked extension build';
}
