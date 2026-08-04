export function tripState({ started = false, arrived = false, cancelled = false } = {}) { if (cancelled) return 'cancelled'; if (arrived) return 'arrived'; return started ? 'active' : 'pending'; }
