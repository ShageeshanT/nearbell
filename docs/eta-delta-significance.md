# etaDeltaSignificance

Convert an ETA delta (in seconds) into a short human-readable label
that explains how big the change really is to the rider.

## Tiers

| Magnitude (sec) | Tier    | Label                |
|-----------------|---------|----------------------|
| < 30            | tiny    | minor change         |
| < 120           | small   | a minute or two      |
| < 300           | medium  | a few minutes        |
| < 900           | large   | several minutes      |
| >= 900          | major   | a much longer trip   |

## Why

Raw numbers like "+3m" or "+12m" don't read well in alert copy.
A phrase like "a few minutes later" gives context without making
the user do mental math on a moving ETA.

## API

```js
const { etaDeltaSignificance } = require('./etaDeltaSignificance');

etaDeltaSignificance(45);
// -> { tier: 'small', label: 'a minute or two' }

etaDeltaSignificance(1200);
// -> { tier: 'major', label: 'a much longer trip' }

etaDeltaSignificance(null);
// -> { tier: 'unknown', label: 'unchanged' }
```
