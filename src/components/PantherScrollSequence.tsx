import { useEffect, useRef, type RefObject } from 'react';
import portraitUrl from '../../bp/black panther.png';

const frameModules = import.meta.glob<string>(
  '../assets/panther-frames/*.{webp,avif,jpg,jpeg,png}',
  { eager: true, import: 'default' },
);
const frameUrls = Object.entries(frameModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([, url]) => url);

type PantherScrollSequenceProps = {
  sectionRef: RefObject<HTMLElement | null>;
};

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export default function PantherScrollSequence({ sectionRef }: PantherScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const context = canvas?.getContext('2d', { alpha: true });
    if (!canvas || !section || !context) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const images = frameUrls.map((url) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = url;
      return image;
    });
    const portrait = new Image();
    portrait.decoding = 'async';
    portrait.src = portraitUrl;

    let frameIndex = -1;
    let animationFrame = 0;

    const drawCover = (image: HTMLImageElement, width: number, height: number, progress: number) => {
      const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight) * (1 + progress * 0.025);
      const drawWidth = image.naturalWidth * scale;
      const drawHeight = image.naturalHeight * scale;
      const x = (width - drawWidth) / 2 - progress * width * 0.008;
      const y = (height - drawHeight) / 2;
      context.drawImage(image, x, y, drawWidth, drawHeight);
    };

    const drawPortrait = (image: HTMLImageElement, width: number, height: number, progress: number) => {
      // Smooth scrub: starts showing Charan in the Wakanda Forever salute, then gently glides inward
      const eased = progress * progress * (3 - 2 * progress);
      const scale = Math.min((width * 0.68) / image.naturalWidth, (height * 1.05) / image.naturalHeight) * (1 + eased * 0.16);
      const drawWidth = image.naturalWidth * scale;
      const drawHeight = image.naturalHeight * scale;
      const centerX = width * (0.74 - eased * 0.025);
      const x = centerX - drawWidth / 2;
      const y = (height - drawHeight) / 2 - eased * height * 0.02;

      context.save();
      // Render Charan with rich contrast, authentic lighting, and deep Wakanda obsidian integration
      context.filter = 'brightness(0.76) contrast(1.15) saturate(0.96)';
      context.drawImage(image, x, y, drawWidth, drawHeight);

      // Atmospheric edge blend
      context.globalCompositeOperation = 'source-atop';
      const grade = context.createLinearGradient(x, 0, x + drawWidth, 0);
      grade.addColorStop(0, 'rgba(3, 3, 5, 0.45)');
      grade.addColorStop(0.24, 'rgba(3, 3, 5, 0.12)');
      grade.addColorStop(0.68, 'rgba(3, 3, 5, 0.02)');
      grade.addColorStop(1, 'rgba(5, 3, 10, 0.2)');
      context.fillStyle = grade;
      context.fillRect(x, y, drawWidth, drawHeight);

      // Subtle kinetic violet rim glow along the lower armor & vibranium claws
      const bottomGlow = context.createLinearGradient(0, y + drawHeight * 0.65, 0, y + drawHeight);
      bottomGlow.addColorStop(0, 'rgba(139, 92, 246, 0)');
      bottomGlow.addColorStop(1, 'rgba(139, 92, 246, 0.28)');
      context.fillStyle = bottomGlow;
      context.fillRect(x, y + drawHeight * 0.65, drawWidth, drawHeight * 0.35);

      context.restore();
    };

    const render = () => {
      animationFrame = 0;
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.round(bounds.width * ratio));
      const height = Math.max(1, Math.round(bounds.height * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = reduceMotion ? 0 : clamp01(-section.getBoundingClientRect().top / travel);
      const nextFrame = images.length ? Math.round(progress * (images.length - 1)) : -1;
      if (nextFrame !== frameIndex) frameIndex = nextFrame;

      context.clearRect(0, 0, width, height);
      if (images.length) {
        const frame = images[frameIndex];
        if (frame?.complete && frame.naturalWidth > 0) {
          drawCover(frame, width, height, progress);
          return;
        }
      }

      if (portrait.complete && portrait.naturalWidth > 0) {
        drawPortrait(portrait, width, height, progress);
      }
    };

    const scheduleRender = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(render);
    };

    window.addEventListener('scroll', scheduleRender, { passive: true });
    window.addEventListener('resize', scheduleRender);
    portrait.addEventListener('load', scheduleRender);
    images.forEach((image) => image.addEventListener('load', scheduleRender));
    scheduleRender();

    return () => {
      window.removeEventListener('scroll', scheduleRender);
      window.removeEventListener('resize', scheduleRender);
      portrait.removeEventListener('load', scheduleRender);
      images.forEach((image) => image.removeEventListener('load', scheduleRender));
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [sectionRef]);

  return <canvas className="hero-panther-sequence" ref={canvasRef} aria-hidden="true" />;
}
