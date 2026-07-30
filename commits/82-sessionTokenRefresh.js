// Determines whether a session token needs refreshing before it expires.
function needsRefresh(expiresAtMs, refreshMarginMs = 5 * 60 * 1000) {
  return Date.now() > (expiresAtMs - refreshMarginMs);
}

module.exports = { needsRefresh };
