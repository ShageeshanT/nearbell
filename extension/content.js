import { parseEtaText, parseDistanceText } from '../src/routeTextParser.js';
export function readVisibleRouteText(documentRef = document) { return documentRef.body?.innerText || ''; }
export function extractRouteSnapshotFromText(text) { return { etaMinutes: parseEtaText(text), distanceMeters: parseDistanceText(text), destination: 'Google Maps destination' }; }
window.NearBellContent = { readVisibleRouteText, extractRouteSnapshotFromText };
