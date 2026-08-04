export function waypointsRemaining(total = 0, completed = 0) { return Math.max(0, Math.floor(Number(total)) - Math.floor(Number(completed))); }
