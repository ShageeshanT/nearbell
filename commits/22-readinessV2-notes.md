# alertReadinessScoreV2 Notes

New scoring formula balances three signals:

- eta proximity (50%)
- distance proximity (30%)
- signal quality (20%)

etaScore = 1 - eta / 30, clamped 0..1
distanceScore = 1 - distance / 10, clamped 0..1
quality = signal quality from feed, 0..1

Result is rounded to 3 decimals.

Use it instead of the v1 score when the integration wants a finer signal blend.