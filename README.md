# NearBell

NearBell is a browser extension concept for customizable destination proximity alerts during Google Maps style navigation sessions.

It works like a smart route timer: when your destination is getting close, NearBell rings at the times you choose, such as 15 minutes before arrival and again at 5 minutes.

## Features

- Custom alert offsets
- Sensible travel presets
- Browser notification payloads
- Local settings model
- Google Maps content-script boundary
- Demo route simulator
- Tests for the core alert engine

## Quick start

```bash
npm test
npm run lint
npm run build
```

Then load `dist/extension` as an unpacked Chrome extension.
