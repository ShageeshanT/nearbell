export function alertReadiness({ permission = 'default', offsets = [], etaMinutes } = {}) {
  const cleanOffsets = offsets.filter((offset) => Number.isFinite(Number(offset)) && Number(offset) > 0);
  const eta = Number(etaMinutes);
  const ready = permission === 'granted' && cleanOffsets.length > 0 && Number.isFinite(eta) && eta >= 0;

  if (ready) {
    return { ready: true, reason: 'ready', copy: `${cleanOffsets.length} alert${cleanOffsets.length === 1 ? '' : 's'} ready for this trip.` };
  }

  if (permission !== 'granted') return { ready: false, reason: 'permission', copy: 'Enable notification permission before starting arrival alerts.' };
  if (cleanOffsets.length === 0) return { ready: false, reason: 'offsets', copy: 'Add at least one alert lead time.' };
  return { ready: false, reason: 'eta', copy: 'Start a route so NearBell can read the ETA.' };
}
