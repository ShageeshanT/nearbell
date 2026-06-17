export function createSession(id, snapshot) { return { id, startedAt: Date.now(), lastEtaMinutes: snapshot.etaMinutes, destination: snapshot.destination, firedOffsets: [] }; }
export function markFired(session, offsets) { return { ...session, firedOffsets: [...new Set([...session.firedOffsets, ...offsets])] }; }
