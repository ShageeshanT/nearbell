const PATTERNS = {
  quiet: [80],
  normal: [120, 80, 120],
  urgent: [180, 90, 180, 90, 240]
};

export function vibrationPattern(level = 'normal') {
  return [...(PATTERNS[level] || PATTERNS.normal)];
}
