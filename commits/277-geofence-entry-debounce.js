// Requires N consecutive inside-fence readings before confirming entry
export function confirmEntry(recentInsideFlags, requiredStreak = 2) {
  const tail = recentInsideFlags.slice(-requiredStreak);
  return tail.length === requiredStreak && tail.every(Boolean);
}
