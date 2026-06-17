import { dueAlerts, createAlertMessage } from './scheduler.js';
import { markFired } from './session.js';
export function evaluateSession(session, snapshot, offsets) { const due = dueAlerts(session.lastEtaMinutes, snapshot.etaMinutes, offsets).filter((offset) => !session.firedOffsets.includes(offset)); const alerts = due.map((offset) => ({ offset, message: createAlertMessage(offset, snapshot.destination) })); return { session: { ...markFired(session, due), lastEtaMinutes: snapshot.etaMinutes }, alerts }; }
