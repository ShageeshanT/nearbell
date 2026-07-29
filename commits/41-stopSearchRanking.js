/**
 * Ranks stop search results using a mix of text-match quality
 * and physical distance from the user.
 */
function rankStopResults(results, query) {
  const q = query.trim().toLowerCase();

  return [...results].sort((a, b) => {
    const aStarts = a.name.toLowerCase().startsWith(q) ? 0 : 1;
    const bStarts = b.name.toLowerCase().startsWith(q) ? 0 : 1;
    if (aStarts !== bStarts) return aStarts - bStarts;
    return (a.distance || 0) - (b.distance || 0);
  });
}

module.exports = { rankStopResults };
