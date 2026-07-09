export function installHint(browser = 'chrome') {
  const value = String(browser).toLowerCase();
  if (value.includes('edge')) return 'Open Edge extensions and load the unpacked NearBell build.';
  if (value.includes('brave')) return 'Open Brave extensions and load the unpacked NearBell build.';
  return 'Open Chrome extensions and load the unpacked NearBell build.';
}
