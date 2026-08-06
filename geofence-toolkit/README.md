# geofence-toolkit

A small, zero-dependency toolkit for geofence-based arrival alerts — the
core logic behind nearbell's "tell me when I'm near X" feature.

## Why

nearbell needs to answer one question really well: *"is the user close
enough, and arriving soon enough, that we should ping them now?"*
This toolkit isolates that logic into small, independently-tested
functions so it can be reused, tuned, and unit tested without touching
the rest of the app.

## Install / use locally

No npm dependencies — just Node.js >= 14.

```
cd geofence-toolkit
npm test          # runs the full test suite (7 files)
node bin/cli.js help
```

## Library usage

```js
const {
  shouldTriggerAlert,
  loadGeofencesFromFile,
  evaluateAll,
  nearestGeofence,
} = require('./src/index');

const fences = loadGeofencesFromFile('./config/example.json');
const me = { lat: 6.9271, lng: 79.8612 };
const speedMetersPerSecond = 8;

// Check one fence
const result = shouldTriggerAlert(me, speedMetersPerSecond, fences[0]);
// -> { shouldAlert, reason, distanceMeters, etaSeconds }

// Check all fences at once
const all = evaluateAll(me, speedMetersPerSecond, fences);

// Which fence is closest right now?
const closest = nearestGeofence(me, fences);
```

## CLI usage

```
# One-shot check against a config file
node bin/cli.js check --config config/example.json --lat 6.9271 --lng 79.8612 --speed 5

# Simulate a route (semicolon-separated lat,lng points) crossing your fences
node bin/cli.js watch --config config/example.json \
  --route "7.29,80.63;6.93,79.865;6.9271,79.8612" --speed 20 --interval-ms 500
```

## Config format

```json
{
  "geofences": [
    {
      "name": "home",
      "center": { "lat": 6.9271, "lng": 79.8612 },
      "radiusMeters": 150,
      "alertLeadSeconds": 300
    }
  ]
}
```

`alertLeadSeconds` is optional — it's how far out (in seconds of
estimated travel time) the alert should fire before actual arrival.
Omit it (or set it to 0) to only alert once someone is physically
inside the radius.

## Modules

| Module | Purpose |
|---|---|
| `src/haversine.js` | great-circle distance between two coordinates |
| `src/units.js` | distance unit conversions + `formatDistance` |
| `src/geofence.js` | point-in-radius geofence checks |
| `src/eta.js` | ETA estimation from distance + speed |
| `src/alertTrigger.js` | combines geofence + ETA into an alert decision |
| `src/multiGeofence.js` | evaluate/rank a point against many fences |
| `src/configLoader.js` + `src/validate.js` | load & validate geofence JSON |
| `src/logger.js` | tiny timestamped console logger |
| `bin/cli.js` | `check` and `watch` commands |

## Status

v1.0.0 — all planned modules shipped, CLI working, full test suite
passing (`npm test`).
