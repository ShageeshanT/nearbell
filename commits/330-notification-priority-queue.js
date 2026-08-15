// Inserts a new alert into a queue ordered by priority, highest first
export function insertByPriority(queue, alert) {
  const idx = queue.findIndex((a) => a.priority < alert.priority);
  const pos = idx === -1 ? queue.length : idx;
  return [...queue.slice(0, pos), alert, ...queue.slice(pos)];
}
