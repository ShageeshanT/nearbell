export function normalizeFavoriteDestination(name) {
  return `${name}`.trim().replace(/\s+/g, " ");
}
