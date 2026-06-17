export function addAlertHistory(history, alert, limit = 20) { return [alert, ...history].slice(0, limit); }
export function clearAlertHistory() { return []; }
