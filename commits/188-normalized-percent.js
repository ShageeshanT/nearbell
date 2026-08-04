export function normalizedPercent(value = 0, total = 1) { return total > 0 ? Math.max(0, Math.min(100, (Number(value) / Number(total)) * 100)) : 0; }
