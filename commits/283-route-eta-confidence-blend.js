// Blends provider ETA with device-computed ETA, weighted by each source's confidence
export function blendEta(providerEta, providerConf, deviceEta, deviceConf) {
  const totalConf = providerConf + deviceConf;
  if (totalConf === 0) return providerEta;
  return Math.round((providerEta * providerConf + deviceEta * deviceConf) / totalConf);
}
