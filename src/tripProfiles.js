export const TRIP_PROFILES = { bus: { label: 'Bus ride', offsetsMinutes: [20,10,5] }, walk: { label: 'Walking', offsetsMinutes: [10,5,2] }, train: { label: 'Train ride', offsetsMinutes: [30,15,5] } };
export function getTripProfile(mode) { return TRIP_PROFILES[mode] || TRIP_PROFILES.bus; }
