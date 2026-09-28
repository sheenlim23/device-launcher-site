// Downloads are GitHub Release assets on this repo. The "latest/download/<name>" form always
// points at the newest release, so publishing a new release updates every button.
const RELEASES = 'https://github.com/sheenlim23/device-launcher-site/releases';

export const downloads = {
  installer: `${RELEASES}/latest/download/DeviceLauncher-Setup.exe`,
  portable: `${RELEASES}/latest/download/DeviceLauncher-Portable.exe`,
  apk: `${RELEASES}/latest/download/device-link.apk`,
  appImage: `${RELEASES}/latest/download/DeviceLauncher-x86_64.AppImage`,
  deb: `${RELEASES}/latest/download/device-launcher_amd64.deb`,
  all: RELEASES,
};
