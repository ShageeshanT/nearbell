# geofence-toolkit

A small, zero-dependency toolkit for geofence-based arrival alerts — the
core logic behind nearbell's "tell me when I'm near X" feature.

## Why

nearbell needs to answer one question really well: *"is the user close
enough, and arriving soon enough, that we should ping them now?"*
This toolkit isolates that logic into small, independently-tested
functions so it can be reused, tuned, and unit tested without touching
the rest of the app.

## Status

Under active development. See CHANGELOG.md for progress.

## Modules (planned)

- `src/haversine.js` — great-circle distance between two coordinates
- `src/units.js` — distance unit conversions (m / km / mi)
- `src/geofence.js` — point-in-radius geofence checks
- `src/eta.js` — ETA estimation from distance + speed
- `src/alertTrigger.js` — combines geofence + ETA into an alert decision
- `src/configLoader.js` — load geofence definitions from JSON
- `bin/cli.js` — command line interface

Full usage docs land once the core modules are in place.
