// Ranks stop search suggestions by how closely they match the typed query.
function rankSuggestions(stops, query) {
  const q = query.trim().toLowerCase();
  return stops
    .filter(s => s.name.toLowerCase().includes(q))
    .sort((a, b) => a.name.toLowerCase().indexOf(q) - b.name.toLowerCase().indexOf(q));
}

module.exports = { rankSuggestions };
