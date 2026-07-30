// Normalizes alert sound volume based on time of day and device settings.
function normalizedVolume(baseVolume, hourOfDay, quietHoursStart = 22, quietHoursEnd = 7) {
  const inQuietHours = hourOfDay >= quietHoursStart || hourOfDay < quietHoursEnd;
  return inQuietHours ? baseVolume * 0.3 : baseVolume;
}

module.exports = { normalizedVolume };
