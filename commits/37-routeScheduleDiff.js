/**
 * Diffs a live schedule against the published timetable,
 * returning entries that were added, removed, or shifted.
 */
function diffSchedule(published, live) {
  const added = live.filter((l) => !published.some((p) => p.id === l.id));
  const removed = published.filter((p) => !live.some((l) => l.id === p.id));
  const shifted = live.filter((l) => {
    const match = published.find((p) => p.id === l.id);
    return match && match.time !== l.time;
  });

  return { added, removed, shifted };
}

module.exports = { diffSchedule };
