export function buildAlertPlan(offsets = []) {
  return [...new Set(offsets)].sort((a,b)=>b-a).map((minutes)=>({ minutes, fired: false }));
}
