export function alertAriaLabel(offset, destination) { return `Arrival alert. About ${offset} minutes remaining to ${destination}.`; }
export function settingsSummary(offsets) { return `Alerts set for ${offsets.join(', ')} minutes before arrival.`; }
