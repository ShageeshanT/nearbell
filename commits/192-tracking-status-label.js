export function trackingStatusLabel(active = false, fresh = false) { return active && fresh ? 'Tracking live' : active ? 'Waiting for location' : 'Tracking paused'; }
