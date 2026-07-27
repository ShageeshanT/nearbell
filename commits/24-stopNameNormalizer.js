/**
 * Normalizes inconsistent stop names from different data
 * sources (extra spaces, casing, abbreviations) for matching.
 */
function normalizeStopName(name) {
  return String(name)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/\bst\.?\b/g, 'street')
    .replace(/\bjn\.?\b/g, 'junction');
}

module.exports = { normalizeStopName };
