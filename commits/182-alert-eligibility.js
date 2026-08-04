export function alertEligible({ enabled = true, quiet = false, closeEnough = false, cooldownReady = false } = {}) { return enabled && !quiet && closeEnough && cooldownReady; }
