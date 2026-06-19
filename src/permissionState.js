export function permissionBadge(permission) {
  return permission === "granted" ? "Notifications on" : permission === "denied" ? "Notifications blocked" : "Notifications not set";
}
