import { useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import heroBgImage from '../assets/hero-crimson-moon-bg.webp';
import { profile } from '../data/portfolio';
import DecodeText from './WakandaDecode';
import './HeroSection.css';

/* ─── TECH STACK GLYPHS ───────────────────────────────────────────────────── */

function AwsLogo() {
  return (
    <svg viewBox="0 3.5 24 17" fill="#FFFFFF" fillRule="evenodd" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <title>AWS</title>
      <path d="M6.763 11.212c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.39-.384-.59-.894-.59-1.533 0-.678.24-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.4 2.4 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167 4.577 4.577 0 011.005-.36 4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586h.016zm-3.24 1.214c.263 0 .534-.048.822-.144a1.78 1.78 0 00.758-.51 1.27 1.27 0 00.272-.512c.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 6.726a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.15 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32L12.32 7.747l-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08l-.686.001zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.32.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .36.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.16.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926a2.157 2.157 0 01-.583.703c-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" />
      <path d="M.378 15.475c3.384 1.963 7.56 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.44-.2.814.287.383.607-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351zm23.531-.2c.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151l.175-.439c.343-.88.802-2.198.52-2.555-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399z" fill="#F90" />
    </svg>
  );
}

function DockerLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="#008fe2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <title>Docker</title>
      <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z" />
    </svg>
  );
}

function RedisLogo() {
  return (
    <svg viewBox="0 0 256 220" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <title>Redis</title>
      <path d="M246 169c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 209.4 24 179 10.3 172.5 3.6 169.3 0 166.5 0 164v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.3V160c0 2.5-3 5.3-10 9" fill="#912626" />
      <path d="M246 143.2c-13.7 7.1-84.5 36.2-99.5 44-15.1 8-23.5 7.9-35.4 2.2-11.9-5.7-87.2-36.1-100.8-42.6-13.5-6.5-13.8-11-.5-16.2 13.4-5.2 88.2-34.6 104-40.3 16-5.6 21.4-5.8 34.9-1 13.4 5 83.8 33 97.1 37.9 13.3 4.9 13.8 8.9.2 16" fill="#C6302B" />
      <path d="M246 127c-13.7 7.2-84.5 36.3-99.5 44.2-15.1 7.8-23.5 7.7-35.4 2-11.9-5.6-87.2-36-100.8-42.6-6.7-3.2-10.3-6-10.3-8.5V96.2s98-21.3 113.9-27c15.8-5.7 21.3-5.9 34.8-1 13.4 5 94 19.5 107.3 24.4V118c0 2.5-3 5.4-10 9" fill="#912626" />
      <path d="M246 101.4c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 141.8 24 111.4 10.3 105c-13.5-6.5-13.8-11-.5-16.1C23.2 83.5 98 54 113.8 48.5c16-5.7 21.4-6 34.9-1 13.4 5 83.8 33 97.1 37.8 13.3 5 13.8 9 .2 16" fill="#C6302B" />
      <path d="M246 83.7c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 124.1 24 93.7 10.3 87.2 3.6 84 0 81.2 0 78.7v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.4v25.5c0 2.5-3 5.3-10 9" fill="#912626" />
      <path d="M246 58c-13.7 7-84.5 36.1-99.5 44-15.1 7.9-23.5 7.8-35.4 2C99.2 98.5 24 68 10.3 61.6c-13.5-6.5-13.8-11-.5-16.2C23.2 40.1 98 10.7 113.8 5c16-5.6 21.4-5.8 34.9-.9 13.4 5 83.8 33 97.1 37.8 13.3 4.9 13.8 9 .2 16" fill="#C6302B" />
      <path d="m159.3 32.8-22 2.2-5 11.9-8-13.2L99 31.4l19-6.9-5.8-10.5 17.8 7 16.7-5.5-4.5 10.9 17 6.4M131 90.3l-41-17 58.8-9.1-17.8 26M74 39.3c17.5 0 31.5 5.5 31.5 12.2 0 6.8-14 12.2-31.4 12.2s-31.5-5.4-31.5-12.2c0-6.7 14.1-12.2 31.5-12.2" fill="#FFF" />
      <path d="M185.3 36 220 49.8l-34.8 13.7V36" fill="#621B1C" />
      <path d="M146.8 51.2 185.3 36v27.5l-3.8 1.5-34.7-13.8" fill="#9A2928" />
    </svg>
  );
}

function AzureDevOpsLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
      <defs>
        <linearGradient id="azureDevOpsGrad" x1="9" y1="16.97" x2="9" y2="1.03" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0078d4" />
          <stop offset="0.16" stopColor="#1380da" />
          <stop offset="0.53" stopColor="#3c91e5" />
          <stop offset="0.82" stopColor="#559cec" />
          <stop offset="1" stopColor="#5ea0ef" />
        </linearGradient>
      </defs>
      <title>Azure DevOps</title>
      <path
        d="M17,4v9.74l-4,3.28-6.2-2.26V17L3.29,12.41l10.23.8V4.44Zm-3.41.49L7.85,1V3.29L2.58,4.84,1,6.87v4.61l2.26,1V6.57Z"
        fill="url(#azureDevOpsGrad)"
      />
    </svg>
  );
}

function CSharpLogo() {
  return (
    <svg viewBox="0 -1.43 255.58 290.11" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <title>C#</title>
      <path fill="#a179dc" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76a24.4 24.4 0 0 0-9.24-9C209.17 43.05 175.1 23.5 141.1 3.86c-9.17-5.3-18.06-5.1-27.16.27-13.54 7.98-81.35 46.83-101.55 58.53C4.06 67.5.02 74.87 0 84.44v118.37c0 4.72 1 8.9 2.99 12.51 2.05 3.72 5.17 6.82 9.38 9.26 20.21 11.7 88.02 50.55 101.56 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25c1.99-3.61 2.98-7.8 2.98-12.52l-.01-118.35" />
      <path fill="#280068" d="M128.18 143.24 2.98 215.33c2.06 3.7 5.18 6.8 9.4 9.25 20.2 11.7 88.01 50.55 101.55 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25z" />
      <path fill="#390091" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76l-124.26 71.55 124.41 72.07c2-3.6 2.99-7.79 3-12.51 0 0 0-78.9-.02-118.35" />
      <g fill="#fff">
        <path d="M201.9 116.3v13.47h13.47v-13.48h6.73v13.48h13.48v6.73H222.1v13.48h13.48v6.74H222.1v13.47h-6.73V156.7h-13.48v13.48h-6.73V156.7h-13.48v-6.73h13.47V136.5h-13.47v-6.74h13.47v-13.48zm13.47 20.2h-13.48v13.48h13.48z" />
        <path d="M128.46 48.63a94.96 94.96 0 0 1 82.26 47.45l-.16-.27-41.35 23.8A47.28 47.28 0 0 0 129 96.33h-.54a47.3 47.3 0 0 0-47.3 47.3 47.08 47.08 0 0 0 6.23 23.47 47.28 47.28 0 0 0 82.29-.27l-.2.35 41.29 23.91a94.97 94.97 0 0 1-81.25 47.54h-1.06a94.96 94.96 0 0 1-95-95 95 95 0 0 1 95-95z" />
      </g>
    </svg>
  );
}

const techStack: { label: string; icon?: ReactNode; more?: boolean }[] = [
  {
    label: 'AWS',
    icon: <AwsLogo />,
  },
  {
    label: 'Docker',
    icon: <DockerLogo />,
  },
  {
    label: 'Redis',
    icon: <RedisLogo />,
  },
  {
    label: 'Azure DevOps',
    icon: <AzureDevOpsLogo />,
  },
  {
    label: 'C#',
    icon: <CSharpLogo />,
  },
  {
    label: '+ More',
    more: true,
  },
];

/* ─── STAT GLYPHS ─────────────────────────────────────────────────────────── */

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="butt" strokeLinejoin="miter">
      <path d="M2 9l10-6 10 6-10 6z" />
      <path d="M22 9v7" />
      <path d="M5.5 11.1v6.4l6.5 3.5 6.5-3.5v-6.4" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 19A4 4 0 0 1 6.02 11.03A5.5 5.5 0 0 1 16.98 11A4 4 0 0 1 17 19Z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.49v-1.9c-2.84.62-3.44-1.24-3.44-1.24-.47-1.18-1.14-1.5-1.14-1.5-.93-.63.07-.62.07-.62 1.03.07 1.57 1.06 1.57 1.06.91 1.56 2.39 1.11 2.97.85.09-.66.36-1.11.65-1.37-2.27-.26-4.65-1.13-4.65-5.04 0-1.11.4-2.02 1.05-2.73-.11-.26-.46-1.3.1-2.71 0 0 .86-.27 2.81 1.05a9.7 9.7 0 0 1 5.12 0c1.95-1.32 2.81-1.05 2.81-1.05.56 1.41.21 2.45.1 2.71.65.71 1.05 1.62 1.05 2.73 0 3.92-2.39 4.78-4.67 5.03.37.32.69.94.69 1.9v2.81c0 .27.19.6.71.49A10.2 10.2 0 0 0 12 1.8Z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
      <path d="M18 14.5V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V7.5A1.5 1.5 0 0 1 5 6h4.5" />
    </svg>
  );
}

const stats: { icon: ReactNode; value: string; label: string; highlight?: boolean }[] = [
  { icon: <CodeIcon />, value: '1+ Year', label: 'Experience' },
  { icon: <LayersIcon />, value: '5+', label: 'Projects' },
  { icon: <CapIcon />, value: 'MCA', label: '(1st Semester)' },
  { icon: <CloudIcon />, value: 'Cloud & DevOps', label: 'AWS • Docker • CI/CD' },
];

/* ─── HERO ────────────────────────────────────────────────────────────────── */

type ButtonKey = 'primary' | 'ghost';

interface Ripple {
  id: number;
  key: ButtonKey;
  x: number;
  y: number;
  size: number;
}

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  /* Press feedback: a ripple expands from the exact pointer position. */
  const rippleSeed = useRef(0);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const spawnRipple =
    (key: ButtonKey) =>
    (event: ReactPointerEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2.2;
      const id = rippleSeed.current++;

      setRipples(prev => [
        ...prev,
        {
          id,
          key,
          x: event.clientX - rect.left - size / 2,
          y: event.clientY - rect.top - size / 2,
          size,
        },
      ]);

      window.setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== id));
      }, 700);
    };

  const ripplesFor = (key: ButtonKey) =>
    ripples
      .filter(ripple => ripple.key === key)
      .map(ripple => (
        <span
          key={ripple.id}
          className="hero-btn-ripple"
          style={{ left: ripple.x, top: ripple.y, width: ripple.size, height: ripple.size }}
          aria-hidden="true"
        />
      ));

  /* Leaving the site: the link is a plain external anchor. */
  const githubUrl = profile.github || 'https://github.com/charan-kumar99';

  return (
    <section id="hero" className="hero-stage" aria-label="Introduction">
      {/* Fullscreen Black Panther artwork beneath the crimson moon */}
      <div className="hero-backdrop-layer" aria-hidden="true">
        <img
          src={heroBgImage}
          alt=""
          className="hero-backdrop-img"
        />
        <div className="hero-backdrop-gradient" />
        <div className="hero-cosmic-glow" />
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <p className="hero-eyebrow">
            <span className="hero-sparkle" aria-hidden="true">✦</span>
            <span className="hero-eyebrow-wakanda">
              <DecodeText text="HELLO," startDelay={940} step={28} />
            </span>{' '}
            <span className="hero-eyebrow-name">
              <DecodeText text="I&apos;M CHARAN KUMAR" startDelay={1108} step={28} />
            </span>
          </p>

          {/* Headline */}
          <h1 className="hero-headline">
            <span className="hero-headline-line">
              <DecodeText text="Building Scalable" startDelay={1640} step={30} />
            </span>
            <span className="hero-headline-line hero-headline-line--gradient">
              <DecodeText text="Digital Solutions" startDelay={2190} step={30} />
            </span>
            <span className="hero-headline-line">
              <DecodeText text="with" startDelay={2740} step={28} />{' '}
              <span className="hero-headline-period">.</span>
              <DecodeText text="NET & Cloud" startDelay={2880} step={30} />
              <span className="hero-headline-dot" aria-hidden="true" />
            </span>
          </h1>

          {/* Bio */}
          <p className="hero-bio">
            <strong>Software Developer</strong> with <strong className="hero-bio-accent">1+ year</strong> of experience in
            building scalable backend APIs and full-stack applications using the{' '}
            <span className="hero-bio-highlight">.NET ecosystem</span>, cloud services, and modern development practices.
          </p>

          {/* Core stack chips */}
          <ul className="hero-tech-stack" aria-label="Core technologies">
            {techStack.map(item => (
              <li
                key={item.label}
                className={`hero-tech-chip ${item.more ? 'hero-tech-chip--more' : ''}`}
                onClick={item.more ? () => scrollTo('skills') : undefined}
                role={item.more ? 'button' : undefined}
                tabIndex={item.more ? 0 : undefined}
              >
                {item.icon && <span className="hero-tech-icon">{item.icon}</span>}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="hero-actions">
            <button
              type="button"
              className="hero-btn hero-btn--primary"
              onClick={() => scrollTo('projects')}
              onPointerDown={spawnRipple('primary')}
            >
              {ripplesFor('primary')}
              <RocketIcon />
              <span>Explore My Work</span>
              <span className="hero-btn-arrow-stack" aria-hidden="true">
                <span className="hero-btn-arrow">→</span>
                <span className="hero-btn-arrow hero-btn-arrow--trail">→</span>
              </span>
            </button>

            <a
              className="hero-btn hero-btn--ghost"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              onPointerDown={spawnRipple('ghost')}
            >
              {ripplesFor('ghost')}
              <GithubIcon />
              <span>View on GitHub</span>
              <ExternalIcon />
            </a>
          </div>

          {/* Key metrics */}
          <ul className="hero-stats" aria-label="Career highlights">
            {stats.map(stat => (
              <li key={stat.value} className="hero-stat">
                <span className="hero-stat-icon" aria-hidden="true">{stat.icon}</span>
                <span className="hero-stat-copy">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className={`hero-stat-label ${stat.highlight ? 'hero-stat-label--highlight' : ''}`}>
                    {stat.label}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
