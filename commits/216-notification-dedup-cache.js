export function isDuplicateAlert(alertKey, recentKeys, windowSize = 20) {
  return recentKeys.slice(-windowSize).includes(alertKey);
}
