export function routeModeIcon(mode) {
  return ({ driving: "🚗", walking: "🚶", transit: "🚌" })[mode] || "📍";
}
