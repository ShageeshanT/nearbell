// Falls back through a chain of ETA sources until one returns a usable value
export function resolveEta(sources) {
  for (const s of sources) {
    if (typeof s === "number" && !Number.isNaN(s)) return s;
  }
  return null;
}
