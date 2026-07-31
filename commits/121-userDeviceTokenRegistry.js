// Manages registration/deduplication of push notification device tokens per user.
function registerToken(existingTokens, newToken) {
  if (existingTokens.includes(newToken)) return existingTokens;
  return [...existingTokens, newToken];
}

function removeToken(existingTokens, token) {
  return existingTokens.filter(t => t !== token);
}

module.exports = { registerToken, removeToken };
