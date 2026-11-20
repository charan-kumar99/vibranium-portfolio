import { useState, useEffect, useCallback } from 'react';

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return prefersReducedMotion;
}

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [stored, setStored] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch { return initialValue; }
  });
  const setValue = useCallback((value: T) => {
    setStored(value);
    try { window.localStorage.setItem(key, JSON.stringify(value)); } catch { /* noop */ }
  }, [key]);
  return [stored, setValue];
}

export function useScrollSpy(ids: string[], offset = 150): string {
  const [activeId, setActiveId] = useState(ids[0]);
  useEffect(() => {
    const handleScroll = () => {
      // Near top of document, always lock to the first section (hero)
      if (window.scrollY < 180) {
        setActiveId(ids[0]);
        return;
      }
      const scrollY = window.scrollY + offset;
      const sections = ids
        .map(id => {
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          const docTop = rect.top + window.scrollY;
          return { id, top: docTop };
        })
        .filter((s): s is { id: string; top: number } => s !== null)
        .sort((a, b) => a.top - b.top);

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= sections[i].top) {
          setActiveId(sections[i].id);
          return;
        }
      }
      setActiveId(ids[0]);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);
  return activeId;
}
