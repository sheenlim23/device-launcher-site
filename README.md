# Device Launcher — website

Landing page for **Device Launcher**: run Android emulators without Android Studio, and see and control your real Android phone on your Windows PC (paired with one QR code via the tiny Device Link app).

Built with Next.js (App Router). Deploy on Vercel with the default settings.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Downloads

The download buttons point at this repo's **latest GitHub Release** (`releases/latest/download/<file>`). To ship a new version, publish a new release with these asset names:

- `DeviceLauncher-Setup.exe` (installer)
- `DeviceLauncher-Portable.exe`
- `device-link.apk` (Android companion app)
