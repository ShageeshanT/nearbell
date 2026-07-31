// Picks the correct localized alert message template for the user's language.
const TEMPLATES = {
  en: (stop) => `Your bus is arriving at ${stop} soon.`,
  si: (stop) => `ඔබේ බස්රථය ${stop} වෙත ළඟදීම එනවා.`,
  ta: (stop) => `உங்கள் பேருந்து விரைவில் ${stop} வந்தடையும்.`,
};

function localizeAlert(stopName, langCode = 'en') {
  const template = TEMPLATES[langCode] || TEMPLATES.en;
  return template(stopName);
}

module.exports = { localizeAlert, TEMPLATES };
