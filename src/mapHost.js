export function isSupportedMapHost(hostname = "") {
  return /(^|\.)google\.[a-z.]+$/.test(hostname) || hostname === "maps.google.com";
}
