// Formats ETA minutes into a locale-aware string using Intl.RelativeTimeFormat
export function localizedEta(minutes, locale = "en") {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  return rtf.format(Math.round(minutes), "minute");
}
