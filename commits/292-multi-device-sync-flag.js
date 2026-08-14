// Decides which of a user's devices should own alert delivery to avoid duplicate pings
export function primaryDevice(devices) {
  return devices.reduce((best, d) => (d.lastActiveMs > best.lastActiveMs ? d : best), devices[0]);
}
