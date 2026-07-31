// Estimates how crowded a stop is likely to be based on time of day and historical patterns.
function crowdingLevel(hourOfDay, historicalAverage) {
  const isPeak = (hourOfDay >= 7 && hourOfDay <= 9) || (hourOfDay >= 17 && hourOfDay <= 19);
  const adjusted = isPeak ? historicalAverage * 1.6 : historicalAverage;
  if (adjusted < 10) return 'quiet';
  if (adjusted < 30) return 'moderate';
  return 'crowded';
}

module.exports = { crowdingLevel };
