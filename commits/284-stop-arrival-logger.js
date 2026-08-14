// Records a confirmed arrival event with timestamp for later trip history
export function logArrival(history, stopId, arrivedAtMs) {
  return [...history, { stopId, arrivedAtMs }];
}
