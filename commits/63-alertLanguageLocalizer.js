/**
 * Picks the right localized alert copy, falling back to
 * English when a translation is missing for the user's locale.
 */
function localizeAlert(copyMap, locale) {
  return copyMap[locale] || copyMap.en || Object.values(copyMap)[0];
}

module.exports = { localizeAlert };
