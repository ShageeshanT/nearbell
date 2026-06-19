export function keyboardShortcut(action) {
  return ({ toggle: "Alt+N", snooze: "Alt+S" })[action] || null;
}
