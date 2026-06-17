export function createSnoozeUntil(now, minutes) { return Number(now) + Number(minutes) * 60000; }
export function isSnoozed(now, snoozeUntil) { return Number.isFinite(snoozeUntil) && Number(now) < snoozeUntil; }
