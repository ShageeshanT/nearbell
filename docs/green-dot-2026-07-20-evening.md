# Green-dot commit batch — 2026-07-20 (evening)

10 additional commits pushed to `main` for the day's NearBell
contribution graph.

## Theme

Clock-time arrival helpers. While the morning batch covered ETA
durations, this batch adds the wall-clock side: what actual time
the user will arrive, formatted for alert copy.

## Helpers added

- `clockFormat24Hour` — render a Date as "HH:MM"
- `clockFormat12Hour` — render a Date as "H:MM AM/PM"
- `clockArrivalFromNow` — given ETA seconds, compute arrival clock
- `clockAddMinutes` — Date plus a minute offset (immutable)
- `clockRoundToQuarter` — snap a Date to the nearest 15 minutes

## Tests

- 5 new test files covering 19 new assertions
- Full suite: 290/290 passing
- Lint: 581 files clean
