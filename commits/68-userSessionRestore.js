/**
 * Restores a user's last session state (selected route, favorite
 * stops) from persisted storage, with safe defaults if missing.
 */
function restoreSession(persisted) {
  return {
    selectedRouteId: persisted?.selectedRouteId ?? null,
    favoriteStopIds: Array.isArray(persisted?.favoriteStopIds) ? persisted.favoriteStopIds : [],
    lastOpenedAt: persisted?.lastOpenedAt ?? null,
  };
}

module.exports = { restoreSession };
