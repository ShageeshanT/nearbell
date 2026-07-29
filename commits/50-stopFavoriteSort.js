/**
 * Sorts a user's stops with favorites pinned to the top,
 * preserving relative order within each group.
 */
function sortWithFavoritesFirst(stops, favoriteIds) {
  const favSet = new Set(favoriteIds);
  return [...stops].sort((a, b) => {
    const aFav = favSet.has(a.id) ? 0 : 1;
    const bFav = favSet.has(b.id) ? 0 : 1;
    return aFav - bFav;
  });
}

module.exports = { sortWithFavoritesFirst };
