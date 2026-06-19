export function parseManualEtaInput(value) {
  const match = `${value}`.match(/\d+/); return match ? Number(match[0]) : null;
}
