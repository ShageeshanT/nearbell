// Resolves common colloquial stop name aliases to their canonical stop record.
const ALIASES = {
  'town hall': 'Town Hall Junction',
  'main gate': 'University Main Gate',
  'clock tower': 'Central Clock Tower',
};

function resolveAlias(input) {
  const key = input.trim().toLowerCase();
  return ALIASES[key] || input;
}

module.exports = { resolveAlias, ALIASES };
