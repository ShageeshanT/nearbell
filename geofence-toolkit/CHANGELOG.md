# Changelog

All notable changes to geofence-toolkit are documented here.

## [Unreleased]

### Added
- `haversineDistance` — great-circle distance between two coordinates
- `units` helpers — meter/km/mile conversions and `formatDistance`
- `isInsideGeofence` / `distanceToGeofenceEdge` — radius checks
- `estimateEtaSeconds`, `kmhToMs`, `formatEta` — ETA calculations
- `shouldTriggerAlert` — combined geofence + ETA alert decision
- `validateGeofence` + `configLoader` — load and validate geofence
  definitions from JSON
- `createLogger` — tiny timestamped console logger
- `evaluateAll`, `nearestGeofence`, `activeAlerts` — multi-geofence
  helpers for handling more than one fence at once
- `bin/cli.js` — command line interface with `check` and `watch`
- `test/run.js` — dependency-free test runner (`npm test`)
- `config/example.json` — sample two-fence config (home + office)

### Notes
- Zero runtime dependencies by design — everything here should be easy
  to vendor directly into nearbell's mobile/backend code if useful.
