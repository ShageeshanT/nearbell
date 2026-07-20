# etaRoundingSnap

Snap an ETA minute value to a fixed bucket size for cleaner display.

## Why

Live ETAs jitter every refresh. Showing "14 then 15 then 15" feels noisy.
Snapping to a 5 minute bucket ("15 min away") reads as a real, stable
signal instead of a stream of small changes.

## API

```js
const { etaRoundingSnap } = require('./etaRoundingSnap');

etaRoundingSnap(13);   // 15 (default bucket = 5)
etaRoundingSnap(12);   // 10
etaRoundingSnap(27, 5); // 25
etaRoundingSnap(28, 5); // 30
etaRoundingSnap(7, 3);  // 6
```

## Buckets

Default bucket size is 5 minutes. Use 1 for off-bucket rounding, 5 for
alert copy, 10 for the long-haul header card.

## Edge cases

- Negative values return null.
- Non-numeric input returns null.
- Bucket size is floored to a minimum of 1 to avoid division by zero.
