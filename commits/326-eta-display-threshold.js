// Decides whether an ETA is close enough to show in the compact widget view
export function shouldShowInWidget(etaMinutes, maxMinutes = 45) {
  return etaMinutes <= maxMinutes;
}
