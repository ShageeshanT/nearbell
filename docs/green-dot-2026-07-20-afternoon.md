# Green-dot commit batch — 2026-07-20 (afternoon)

3 additional commits pushed to `main` to round out the day's
NearBell contribution graph.

## Theme

Distance and journey-progress helpers. These complement the morning
ETA formatting batch with two small utilities that power the
progress bar and "X km away" copy.

## Helpers added

- `distanceFormatCompact` — render metres into "Xm" or "X.Y km"
- `arrivalProgressPercent` — compute journey completion percentage
  from total and remaining distance

## Context

Both helpers are pure functions with safe fallbacks for null,
negative, and NaN inputs so they slot into the alert pipeline
without guard clauses.
