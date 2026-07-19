# Green-Dot Commit Batch — 2026-07-19

Repo: nearbell
Branch: main
Base: cccb44cd4ec5c0c1e3a0822e75b587c0b785b00b

This batch adds 24 meaningful commits covering:

- unified route snapshot helpers
- v2 alert readiness scoring
- battery hint helper
- rolling alert deduper
- eta sample buffer + stability score
- arrival confidence weighting
- arrival window / risk copy variants
- arrival buffer helper
- alert tone label helper
- full tests for the new helpers
- docs for each helper family

After sync:
- Local HEAD should match remote HEAD
- `npm test`, `npm run lint`, `npm run build` should pass
- Attribution: ShageeshanT