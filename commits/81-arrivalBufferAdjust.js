// Adjusts the "arriving soon" buffer based on historical accuracy of past predictions.
function adjustedBufferMinutes(baseBufferMinutes, historicalErrorMinutes) {
  const errorPadding = Math.min(5, Math.max(0, historicalErrorMinutes));
  return baseBufferMinutes + errorPadding;
}

module.exports = { adjustedBufferMinutes };
