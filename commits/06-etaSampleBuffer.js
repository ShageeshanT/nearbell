export function createEtaSampleBuffer(size = 5) {
  const buf = [];
  return {
    push(value) {
      if (value === null || value === undefined || value === '') return;
      const v = Number(value);
      if (!Number.isFinite(v)) return;
      buf.push(v);
      if (buf.length > size) buf.shift();
    },
    values() {
      return buf.slice();
    },
    size() {
      return buf.length;
    },
    clear() {
      buf.length = 0;
    }
  };
}