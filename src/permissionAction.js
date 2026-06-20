export function permissionAction(permission) {
  return permission === "granted" ? "start" : "request-permission";
}
