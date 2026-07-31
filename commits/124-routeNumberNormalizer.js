// Normalizes inconsistent route number formats (e.g. "Route 138", "138", "R138") to a canonical form.
function normalizeRouteNumber(raw) {
  return raw.replace(/route/i, '').replace(/^r/i, '').trim();
}

module.exports = { normalizeRouteNumber };
