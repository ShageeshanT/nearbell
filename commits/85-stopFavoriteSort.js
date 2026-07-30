// Sorts a user's saved stops with favorites pinned to the top, then by distance.
function sortFavoritesFirst(stops) {
  return [...stops].sort((a, b) => {
    if (a.isFavorite !== b.isFavorite) return a.isFavorite ? -1 : 1;
    return a.distanceMeters - b.distanceMeters;
  });
}

module.exports = { sortFavoritesFirst };
