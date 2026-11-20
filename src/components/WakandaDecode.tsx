import { useEffect, useState } from 'react';
import './WakandaDecode.css';

/* ─── WAKANDAN BOOT DECODE ────────────────────────────────────────────────────
   Every text using <DecodeText> is drawn in the Wakanda script face and then
   locks character by character left to right into the normal readable
   typeface — a per-letter font change.

   The real characters are used the whole time: the Wakanda Forever face maps
   A–Z one to one and its advance widths are close to the Latin ones, so the
   text keeps its shape while the letters translate.
   ─────────────────────────────────────────────────────────────────────────── */

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export interface DecodeTextProps {
  text: string;
  className?: string;
  /** ms to wait after page load before the first character locks */
  startDelay?: number;
  /** ms between two neighbouring characters locking */
  step?: number;
}

export default function DecodeText({
  text,
  className,
  startDelay = 0,
  step = 34,
}: DecodeTextProps) {
  const [animate] = useState(() => !prefersReducedMotion());
  const [locked, setLocked] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const begin = performance.now() + startDelay;
    const timer = window.setInterval(() => {
      const count = Math.min(
        text.length,
        Math.max(0, Math.floor((performance.now() - begin) / step)),
      );
      setLocked(count);
      if (count >= text.length) window.clearInterval(timer);
      // 16ms polling so a tick can never swallow two characters: one letter,
      // one beat, left to right.
    }, 16);

    return () => window.clearInterval(timer);
  }, [animate, startDelay, step, text]);

  if (!animate) return <span className={className}>{text}</span>;

  return (
    <span className={className} data-decoding={locked < text.length || undefined}>
      {Array.from(text).map((char, index) => {
        if (char === ' ') return ' ';
        // The element itself never remounts: only its class changes, so the
        // same character flips from the Wakanda face to the host face in place.
        return (
          <span key={`k${index}`} className={index < locked ? 'wakanda-char' : 'wakanda-glyph'}>
            {char}
          </span>
        );
      })}
    </span>
  );
}