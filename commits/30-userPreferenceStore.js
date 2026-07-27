/**
 * Small wrapper around a key/value preference store with
 * type-safe defaults, backed by whatever storage is injected.
 */
function createPreferenceStore(storage) {
  return {
    get(key, fallback) {
      const raw = storage.getItem(key);
      if (raw == null) return fallback;
      try {
        return JSON.parse(raw);
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      storage.setItem(key, JSON.stringify(value));
    },
  };
}

module.exports = { createPreferenceStore };
