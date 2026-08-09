export function buildAlertMessage(contactName, minutesToArrival) {
  if (minutesToArrival <= 1) return `${contactName} is arriving now`;
  if (minutesToArrival < 60) return `${contactName} is ${Math.round(minutesToArrival)} min away`;
  const hours = Math.floor(minutesToArrival / 60);
  const mins = Math.round(minutesToArrival % 60);
  return `${contactName} is ${hours}h ${mins}m away`;
}
