// Picks a readable text color (black/white) against a given route's map color.
function relativeLuminance(hex) {
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastTextColor(routeHexColor) {
  return relativeLuminance(routeHexColor) > 0.55 ? '#000000' : '#FFFFFF';
}

module.exports = { relativeLuminance, contrastTextColor };
