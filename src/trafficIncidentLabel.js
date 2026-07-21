// Build a user-facing label for a traffic incident given its kind.
// Returns null for unknown kinds so the UI can fall back.
export function trafficIncidentLabel(kind) {
  switch (kind) {
    case 'accident': return 'Accident reported ahead';
    case 'construction': return 'Roadwork on this route';
    case 'closure': return 'Road closed ahead';
    case 'weather': return 'Weather-related slowdown';
    case 'event': return 'Event traffic nearby';
    default: return null;
  }
}