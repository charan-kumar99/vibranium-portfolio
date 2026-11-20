import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    // Only disable for pure touch-only devices without a mouse
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    // Explicitly hide OS cursor on html and body
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    let rafId: number | null = null;
    let targetX = -100;
    let targetY = -100;

    const updatePosition = () => {
      if (cursorEl) {
        // Scaled hotspot tip: (11.27 * 22 / 48) = 5.16px
        cursorEl.style.transform = `translate3d(${targetX - 5.16}px, ${targetY - 5.16}px, 0)`;
        if (cursorEl.style.opacity !== '1') {
          cursorEl.style.opacity = '1';
        }
      }
      rafId = null;
    };

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    const hideCursor = () => {
      if (cursorEl) cursorEl.style.opacity = '0';
    };

    /* `mouseleave` does not bubble and the browser dispatches it at <html>,
       never at `document`, so binding it to `document` never fires and the
       delta stays painted wherever it was when the pointer left the window.
       `mouseout` with a null relatedTarget is the fallback signal, and `blur`
       covers alt-tabbing away. */
    const onMouseLeave = () => hideCursor();

    const onMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget) return;
      /* A null relatedTarget also happens when the node under the pointer is
         unmounted mid-gesture, so only trust it at the viewport boundary. */
      const atEdge =
        e.clientX <= 0 ||
        e.clientY <= 0 ||
        e.clientX >= window.innerWidth - 1 ||
        e.clientY >= window.innerHeight - 1;
      if (atEdge) hideCursor();
    };

    const onWindowBlur = () => hideCursor();

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('clickable')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('blur', onWindowBlur);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    return () => {
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('blur', onWindowBlur);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <div className="custom-cursor-root" aria-hidden="true">
      <div
        ref={cursorRef}
        className={`custom-cursor-stealth ${isHovered ? 'cursor-hover' : ''} ${isMouseDown ? 'cursor-active' : ''}`}
        style={{ opacity: 0 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 48 48"
          className="stealth-delta-svg"
        >
          <defs>
            {/* Controlled Outer Vibranium Purple Glow */}
            <filter id="delta-glow-outer" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="1.8" />
            </filter>
            {/* Crisp Inner Violet Neon Core */}
            <filter id="delta-glow-core" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="0.9" />
            </filter>
          </defs>
          <g transform="rotate(-45 24 24)">
            {/* Outer Subtle Purple Halo */}
            <path
              d="M20.95 13.4 Q24 6 27.05 13.4 L35.33 33.53 Q38 40 31.92 36.53 L28.34 34.48 Q24 32 19.66 34.48 L16.08 36.53 Q10 40 12.67 33.53 Z"
              fill="none"
              stroke={isHovered ? '#e879f9' : '#a855f7'}
              strokeWidth="2.8"
              strokeLinejoin="round"
              filter="url(#delta-glow-outer)"
              opacity="0.8"
            />
            {/* Inner Radiant Violet Line */}
            <path
              d="M20.95 13.4 Q24 6 27.05 13.4 L35.33 33.53 Q38 40 31.92 36.53 L28.34 34.48 Q24 32 19.66 34.48 L16.08 36.53 Q10 40 12.67 33.53 Z"
              fill="none"
              stroke={isHovered ? '#f472b6' : '#c084fc'}
              strokeWidth="1.8"
              strokeLinejoin="round"
              filter="url(#delta-glow-core)"
              opacity="0.95"
            />
            {/* Tailless Asphalt 9 / Codex Stealth Delta Cursor Body */}
            <path
              d="M20.95 13.4 Q24 6 27.05 13.4 L35.33 33.53 Q38 40 31.92 36.53 L28.34 34.48 Q24 32 19.66 34.48 L16.08 36.53 Q10 40 12.67 33.53 Z"
              fill="#060913"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
