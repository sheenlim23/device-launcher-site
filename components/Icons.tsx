// Small inline icons (stroke = currentColor via CSS) so the page ships no icon library.

export function PhoneMark({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <rect x="9" y="3" width="14" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="16" cy="24" r="1.6" fill="var(--lime)" />
    </svg>
  );
}

export function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M12 3v12m0 0-5-5m5 5 5-5M4 19h16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const useIcons: Record<string, React.ReactNode> = {
  code: <path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16" />,
  devices: (
    <>
      <rect x="3" y="4" width="7" height="12" rx="1.5" />
      <rect x="14" y="4" width="7" height="16" rx="1.5" />
      <path d="M6.5 19h.01" />
    </>
  ),
  pin: (
    <>
      <path d="M12 3a6 6 0 0 1 6 6c0 4.5-6 12-6 12S6 13.5 6 9a6 6 0 0 1 6-6Z" />
      <circle cx="12" cy="9" r="2.2" />
    </>
  ),
  screen: (
    <>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  package: <path d="M4 7h16M4 12h16M4 17h10" />,
  shield: (
    <>
      <path d="M12 3 4 6v6c0 5 3.4 8.5 8 9 4.6-.5 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

export function UseIcon({ name }: { name: keyof typeof useIcons }) {
  return (
    <svg className="use-ic" viewBox="0 0 24 24" aria-hidden="true">
      {useIcons[name]}
    </svg>
  );
}

export function QrGlyph() {
  return (
    <svg viewBox="0 0 21 21" width="44" height="44" shapeRendering="crispEdges" aria-hidden="true">
      <path
        fill="currentColor"
        d="M0 0h7v7H0zM1 1v5h5V1zM2 2h3v3H2zM14 0h7v7h-7zm1 1v5h5V1zm1 1h3v3h-3zM0 14h7v7H0zm1 1v5h5v-5zm1 1h3v3H2zM9 0h2v2H9zM9 3h1v3H9zm2 1h2v2h-2zM8 8h3v1H8zm4 0h1v3h-1zM9 10h2v2H9zm5-1h2v2h-2zm3 0h3v1h-3zM8 13h2v2H8zm3 0h3v2h-3zm4 1h2v3h-2zm3-1h3v2h-3zM9 16h2v3H9zm3 1h2v4h-2zm6 0h3v1h-3zm-1 2h2v2h-2zm3 1h1v1h-1z"
      />
    </svg>
  );
}
