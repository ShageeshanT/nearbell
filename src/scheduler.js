import { normalizeOffsets } from './validation.js';
export function dueAlerts(previousEta, currentEta, offsets) { return normalizeOffsets(offsets).filter((offset) => previousEta > offset && currentEta <= offset); }
export function createAlertMessage(offset, destination = 'your destination') { return `NearBell: about ${offset} minutes to ${destination}.`; }
