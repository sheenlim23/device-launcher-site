# Device Launcher — website

**Live site: https://device-launcher-site.vercel.app**

Landing page for **Device Launcher**: run Android emulators without Android Studio, and see and control your real Android phone on your PC (paired with one QR code via the tiny Device Link app). Runs on **Windows** and **Linux**.

Built with Next.js (App Router). Deployed on Vercel with the default settings.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Downloads

The download buttons point at this repo's **latest GitHub Release** (`releases/latest/download/<file>`). To ship a new version, publish a new release with these asset names:

| File | Platform |
|---|---|
| `DeviceLauncher-Setup.exe` | Windows installer |
| `DeviceLauncher-Portable.exe` | Windows, no install |
| `DeviceLauncher-x86_64.AppImage` | Linux, any distro |
| `device-launcher_amd64.deb` | Linux, Ubuntu / Debian |
| `device-link.apk` | Android companion app |

## Author

Designed and developed by **William Sheen Lim**.
