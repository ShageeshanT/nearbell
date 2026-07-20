import { etaFormatCompact } from './etaFormatCompact.js';
import { etaSingularPlural } from './etaSingularPlural.js';

// Build a one-liner summary string for the current ETA, suitable for
// the popup header or an extension badge. Returns null for bad input.
export function etaQuickLabel(seconds) {
  const compact = etaFormatCompact(seconds);
  if (compact == null) return null;

  const minutes = Math.round(seconds / 60);
  if (minutes < 60) {
    const unit = etaSingularPlural(minutes, 'minute', 'minutes');
    return `${minutes} ${unit} away`;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes - hours * 60;
  if (mins === 0) {
    const unit = etaSingularPlural(hours, 'hour', 'hours');
    return `${hours} ${unit} away`;
  }
  const hourUnit = etaSingularPlural(hours, 'hour', 'hours');
  const minUnit = etaSingularPlural(mins, 'minute', 'minutes');
  return `${hours} ${hourUnit} ${mins} ${minUnit} away`;
}
