export function storageKey(name) {
  const keys = { settings: "nearbell.settings", history: "nearbell.history", session: "nearbell.session" }; return keys[name] || `nearbell.${name}`;
}
