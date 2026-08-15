// Groups near-simultaneous alerts into a single batched notification
export function groupAlerts(alerts, windowMs = 3000) {
  const groups = [];
  for (const a of alerts) {
    const last = groups[groups.length - 1];
    if (last && a.atMs - last[last.length - 1].atMs <= windowMs) last.push(a);
    else groups.push([a]);
  }
  return groups;
}
