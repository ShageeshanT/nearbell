export function formatEtaMinutes(minutes) {
  const v = Math.max(0, Math.round(Number(minutes) || 0)); return v < 60 ? `${v} min` : `${Math.floor(v/60)} hr${v%60 ? ` ${v%60} min` : ""}`;
}
