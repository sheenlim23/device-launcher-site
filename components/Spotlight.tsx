'use client';

import { useEffect } from 'react';

/** Makes the use-case cards glow where the pointer is (sets --mx / --my on each card). */
export default function Spotlight() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.use'));
    const onMove = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    cards.forEach((c) => c.addEventListener('pointermove', onMove));
    return () => cards.forEach((c) => c.removeEventListener('pointermove', onMove));
  }, []);
  return null;
}
