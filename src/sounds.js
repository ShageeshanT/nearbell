export const SOUND_PROFILES = [ { id: 'soft-bell', label: 'Soft bell', file: 'soft-bell.mp3' }, { id: 'urgent-ring', label: 'Urgent ring', file: 'urgent-ring.mp3' }, { id: 'silent', label: 'Silent', file: null } ];
export function getSoundProfile(id) { return SOUND_PROFILES.find((sound) => sound.id === id) || SOUND_PROFILES[0]; }
