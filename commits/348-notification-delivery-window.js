/**
 * Decides whether a notification can be delivered right now, or should be
 * held until the user's quiet hours end.
 */
function canDeliverNow(currentHour, quietStartHour, quietEndHour) {
  if (quietStartHour === quietEndHour) {
    return true;
  }

  if (quietStartHour < quietEndHour) {
    return !(currentHour >= quietStartHour && currentHour < quietEndHour);
  }

  return !(currentHour >= quietStartHour || currentHour < quietEndHour);
}

module.exports = { canDeliverNow };
