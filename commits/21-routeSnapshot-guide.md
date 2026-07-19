# routeSnapshot Guide

`createRouteSnapshot` builds a unified snapshot for any navigation source (Google Maps, manual route, transit feed).

Fields:
- `destination`: trimmed string
- `etaMinutes`: number or null
- `distanceKm`: number or null
- `status`: `incomplete` | `tracking` | `near-arrival`
- `capturedAt`: ISO timestamp

## Status rules
- `incomplete`: eta or distance not finite
- `near-arrival`: eta <= 5 minutes OR distance <= 1 km
- `tracking`: everything else

## Active state
Use `isRouteActive(snapshot)` to gate alert firing.
- false when status is incomplete
- true when status is tracking or near-arrival AND at least one numeric value is finite

This keeps NearBell from firing alerts on partial/incomplete inputs.