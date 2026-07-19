diff --git a/src/routeSnapshot.js b/src/routeSnapshot.js
index c8e4c90..337263d 100644
--- a/src/routeSnapshot.js
+++ b/src/routeSnapshot.js
@@ -5,3 +5,22 @@ export function routeSnapshotStatus({ etaMinutes, distanceKm } = {}) {
   if (eta <= 5 || distance <= 1) return 'near-arrival';
   return 'tracking';
 }
+
+export function createRouteSnapshot({ etaMinutes, distanceKm, destination = '' } = {}) {
+  const eta = Number(etaMinutes);
+  const distance = Number(distanceKm);
+  const status = routeSnapshotStatus({ etaMinutes: eta, distanceKm: distance });
+  return {
+    destination: String(destination || '').trim(),
+    etaMinutes: Number.isFinite(eta) ? eta : null,
+    distanceKm: Number.isFinite(distance) ? distance : null,
+    status,
+    capturedAt: new Date(0).toISOString()
+  };
+}
+
+export function isRouteActive(snapshot = {}) {
+  if (!snapshot || typeof snapshot !== 'object') return false;
+  if (snapshot.status === 'incomplete') return false;
+  return Number.isFinite(Number(snapshot.etaMinutes)) || Number.isFinite(Number(snapshot.distanceKm));
+}
\ No newline at end of file
