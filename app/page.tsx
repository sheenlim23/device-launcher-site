import Image from 'next/image';
import Spotlight from '@/components/Spotlight';
import { DownloadIcon, PhoneMark, QrGlyph, UseIcon } from '@/components/Icons';
import { downloads } from '@/lib/site';

const devices = ['Pixel 9', 'Galaxy S24 Ultra', 'Pixel Tablet', 'Galaxy A55', 'Pixel 9 Pro XL', 'Galaxy Tab S9', 'Pixel 8a', 'Your own phone'];

const uses = [
  { icon: 'code', title: 'Web developers', text: 'Check your site on a real phone without picking it up. Click through flows and type in forms from your desk, next to your code.' },
  { icon: 'devices', title: 'QA and testers', text: 'Open a small phone, a large phone and a tablet side by side, each on a different Android version, and compare layouts in seconds.' },
  { icon: 'pin', title: 'Phone in another room', text: 'Leave your phone charging in the living room and check it from your office. Show screen wakes it, so you can read notifications.' },
  { icon: 'screen', title: 'Demos and teaching', text: 'Put a phone on the big screen during a call or a class. Pin the window on top and take clean screenshots in one click.' },
  { icon: 'package', title: 'App builders', text: 'Drop an APK onto any emulator or phone to install it. Try your build on different Android versions without buying devices.' },
  { icon: 'shield', title: 'People who can’t use Developer options', text: 'Many banking apps stop working when Developer options are on. Device Link doesn’t need them, so your bank apps keep working.' },
] as const;

const steps = [
  { title: 'Install on your PC', text: <>Run the installer. Device Launcher opens with your emulators and an <b>+ Add phone</b> button.</> },
  { title: 'Scan the QR code', text: <>Point your phone’s camera at the code, download Device Link (37&nbsp;KB), tap <b>Connect</b>, then <b>Start now</b>.</> },
  { title: 'Tap Set up', text: <>One button walks you through three phone settings. Flip the switch for Device Link on each and press Back.</> },
  { title: 'Click Show screen', text: <>From now on your phone is one click away on your PC. No more taps on the phone.</> },
];

const faq = [
  { q: 'Does my phone’s screen go to the internet?', a: <>No. Device Link talks only to the PC you paired, over your own Wi-Fi. There are no accounts and no cloud servers.</> },
  { q: 'Why do banking apps show a black screen?', a: <>Banking apps block screen capture to protect you. Your phone shows them normally; only the copy on your PC is black.</> },
  { q: 'Why did Play Protect warn me about Device Link?', a: <>Device Link isn’t from the Play Store, and it uses Accessibility so your PC can tap and type on the phone. Play Protect is cautious about that combination. Tap <b>More details → Install anyway</b>. You can turn the Accessibility switch off at any time; the app then works in view-only mode.</> },
  { q: 'Can someone else see my phone?', a: <>Only a PC that scanned your QR code can connect, and each pairing gets its own random key. Use it on a Wi-Fi network you trust.</> },
  { q: 'Does it work with iPhone?', a: <>No. Device Launcher is for Android phones and Android emulators.</> },
];

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Spotlight />

      <header className="nav">
        <a className="brand" href="#top" aria-label="Device Launcher home">
          <PhoneMark />
          <span>Device Launcher</span>
        </a>
        <nav className="links" aria-label="Sections">
          <a href="#what">What it does</a>
          <a href="#helps">Where it helps</a>
          <a href="#how">How it works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn-sm" href="#download">Download</a>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow reveal"><span className="pulse" /> Windows 10 / 11 · free</p>
            <h1 className="reveal d1">
              Every Android screen,
              <br />
              <span className="glow">on one desktop.</span>
            </h1>
            <p className="lede reveal d2">
              Launch Android emulators without Android Studio, and bring your real phone onto your PC. Scan one QR code, then view
              and control it with your mouse and keyboard.
            </p>
            <div className="cta reveal d3">
              <a className="btn btn-primary" href={downloads.installer}>
                <DownloadIcon />
                Download for Windows
              </a>
              <a className="btn btn-ghost" href="#download">Other downloads</a>
            </div>
            <dl className="specs reveal d4">
              <div><dt>Phone app</dt><dd>37&nbsp;KB</dd></div>
              <div><dt>Pairing</dt><dd>1 QR scan</dd></div>
              <div><dt>Stream</dt><dd>up to 30&nbsp;fps</dd></div>
              <div><dt>Developer options</dt><dd>not needed</dd></div>
            </dl>
          </div>

          <div className="stage reveal d2" aria-hidden="true">
            <div className="ring r1" />
            <div className="ring r2" />
            <svg className="beam" viewBox="0 0 600 520" preserveAspectRatio="none">
              <defs>
                <linearGradient id="beam" x1="0" x2="1">
                  <stop offset="0" stopColor="#3df2ff" stopOpacity="0" />
                  <stop offset=".5" stopColor="#3df2ff" />
                  <stop offset="1" stopColor="#b6ff3d" stopOpacity=".9" />
                </linearGradient>
              </defs>
              <path className="beam-path" d="M470 330 C 400 330, 360 250, 250 240" />
              <path className="beam-path b2" d="M470 360 C 390 380, 330 320, 250 300" />
            </svg>

            <div className="monitor">
              <div className="monitor-bar"><i /><i /><i /><span>Device Launcher</span></div>
              <Image src="/assets/app-devices.jpg" alt="" width={1400} height={915} priority />
            </div>

            <figure className="phone phone-main">
              <div className="phone-screen">
                <Image src="/assets/phone-home.jpg" alt="" width={540} height={1212} priority />
              </div>
              <figcaption><span className="dot live" />Pixel 9 · live</figcaption>
            </figure>

            <div className="chip qr-chip">
              <QrGlyph />
              <div><b>Scan once</b><span>Paired for good</span></div>
            </div>
            <div className="chip ctl-chip">
              <kbd>click</kbd><kbd>swipe</kbd><kbd>type</kbd>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...devices, ...devices].map((d, i) => <span key={i}>{d}</span>)}
          </div>
        </div>

        {/* WHAT IT DOES */}
        <section id="what" className="section">
          <header className="section-head">
            <p className="kicker">What it does</p>
            <h2>Two kinds of devices. One control panel.</h2>
          </header>

          <div className="features">
            <article className="feature">
              <div className="feature-media">
                <Image src="/assets/app-downloads.jpg" alt="The Downloads tab listing Android versions with Google Play" width={1165} height={761} />
              </div>
              <div className="feature-body">
                <p className="tag">Emulators</p>
                <h3>Android emulators, without Android Studio</h3>
                <p>Pick a real phone model, pick an Android version, click Launch. Run several at once, each in its own window, and line them up with Tile windows.</p>
                <ul className="facts">
                  <li><b>11</b> device profiles: Pixel and Galaxy phones and tablets</li>
                  <li>Download Android versions straight from Google, with Google Play</li>
                  <li>Drop an <code>.apk</code> on a device to install it</li>
                </ul>
              </div>
            </article>

            <article className="feature f-phone">
              <div className="feature-media phone-media">
                <figure className="phone phone-sm">
                  <div className="phone-screen">
                    <Image src="/assets/phone-typing.jpg" alt="A phone showing text typed from the PC" width={540} height={1212} />
                  </div>
                </figure>
                <div className="typing-demo" aria-hidden="true"><span className="caret">hello from PC</span></div>
              </div>
              <div className="feature-body">
                <p className="tag tag-lime">Real phones</p>
                <h3>Your real phone, on your screen</h3>
                <p>Install the tiny Device Link app once. After that, click <b>Show screen</b> in Device Launcher and your phone appears on your PC, even if it’s in another room.</p>
                <ul className="facts">
                  <li>Click to tap, drag to swipe, scroll with the wheel, type with your keyboard</li>
                  <li>Wakes the phone’s screen when you look, lets it sleep when you’re done</li>
                  <li>Reconnects by itself after Wi-Fi drops or a phone restart</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* WHERE IT HELPS */}
        <section id="helps" className="section">
          <header className="section-head">
            <p className="kicker">Where it helps</p>
            <h2>Built for people who work across screens</h2>
          </header>
          <div className="uses">
            {uses.map((u) => (
              <article className="use" key={u.title}>
                <UseIcon name={u.icon} />
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="section">
          <header className="section-head">
            <p className="kicker">How it works</p>
            <h2>Set up once. Then it’s one click.</h2>
          </header>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="step-n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* DOWNLOAD */}
        <section id="download" className="section">
          <header className="section-head">
            <p className="kicker">Download</p>
            <h2>Get Device Launcher</h2>
          </header>
          <div className="dl-grid">
            <a className="dl dl-main" href={downloads.installer}>
              <span className="dl-badge">Recommended</span>
              <b>Installer</b>
              <span>Windows 10 / 11 · 64-bit · 106 MB</span>
              <span className="dl-go">DeviceLauncher-Setup.exe →</span>
            </a>
            <a className="dl" href={downloads.portable}>
              <b>Portable</b>
              <span>No install. Runs from any folder · 106 MB</span>
              <span className="dl-go">DeviceLauncher-Portable.exe →</span>
            </a>
            <a className="dl" href={downloads.apk}>
              <b>Device Link for Android</b>
              <span>Android 5.0+ · 37 KB. Device Launcher also offers it when you scan the QR code.</span>
              <span className="dl-go">device-link.apk →</span>
            </a>
          </div>
          <div className="notes">
            <div className="note">
              <h3>Windows says “Windows protected your PC”</h3>
              <p>The app is new and not yet code-signed, so SmartScreen doesn’t recognise it. Click <b>More info</b>, then <b>Run anyway</b>.</p>
            </div>
            <div className="note">
              <h3>What you need</h3>
              <p>For emulators: the Android SDK emulator and platform tools on your PC. For your phone: the phone and PC on the same Wi-Fi. Control needs Android 7 or newer.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <header className="section-head">
            <p className="kicker">FAQ</p>
            <h2>Good questions</h2>
          </header>
          <div className="qa">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        {/* RESPONSIBLE USE */}
        <section id="responsible-use" className="section">
          <div className="disclaimer">
            <div className="disclaimer-head">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path d="M12 3 2.5 20h19L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M12 10v4.5M12 17.2h.01" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h2>Responsible use</h2>
            </div>
            <p>
              Device Launcher and Device Link are for viewing and controlling <b>devices you own</b>, or devices whose owner has
              clearly agreed. Using them to watch, control or access someone else’s phone without their knowledge and consent is
              not allowed. That includes spying, stalking, fraud, or getting into accounts, messages or banking apps that aren’t
              yours.
            </p>
            <p>
              Accessing another person’s device without permission may be a crime under privacy, computer-misuse and anti-hacking
              laws where you live. You are fully responsible for how you use this software. The developer does not support, and is
              not responsible or liable for, any illegal, harmful or malicious use.
            </p>
            <p className="disclaimer-small">
              The software is provided “as is”, without warranty of any kind. Use it at your own risk.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand"><PhoneMark size={20} /> Device Launcher</div>
        <p className="credit">
          Designed and developed by <b>William Sheen Lim</b>, creator of Device Launcher and Device Link.
        </p>
        <nav className="footer-links" aria-label="Footer">
          <a href="#responsible-use">Responsible use</a>
          <a href={downloads.all}>All releases</a>
        </nav>
        <p className="copyright">© {new Date().getFullYear()} William Sheen Lim. All rights reserved.</p>
      </footer>
    </>
  );
}
