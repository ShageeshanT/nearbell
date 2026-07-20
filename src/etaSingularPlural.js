// Pick the right singular or plural noun form based on a numeric count.
// Supports English-only simple cases used across NearBell alert copy.
export function etaSingularPlural(count, singular, plural) {
  const safeSingular = String(singular || '').trim();
  const safePlural = String(plural || safeSingular || '').trim();
  if (safeSingular.length === 0) return '';
  if (typeof count !== 'number' || Number.isNaN(count)) return safeSingular;
  return Math.abs(count) === 1 ? safeSingular : safePlural;
}
