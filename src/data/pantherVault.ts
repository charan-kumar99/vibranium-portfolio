// ============================================================================
// WAKANDA VISUAL VAULT & BLACK PANTHER ARCHIVES
// Curated collection of Charan Kumar in Black Panther habit + Wakandan visuals
// ============================================================================

import charanHero from '../../bp/black panther.png';
import charanAvatar from '../../bp/black panther.png';
import vibraniumBurst from '../../bp/SaveClip.App_753509994_17940157278292519_3247181785620828937_n.jpg';
import cyberGlitch from '../../bp/541146247_17880234255383412_2172016732731353476_n.jpg';
import readyStrike from '../../bp/SaveClip.App_784816349_17904710598542850_7495085394432988796_n.jpg';
import sunGaze from '../../bp/SaveClip.App_784616597_17904710325542850_1512333158239716934_n.jpg';
import kineticCharge from '../../bp/SaveClip.App_784796349_17904710694542850_5352688197691223879_n.jpg';
import sunsetProwl from '../../bp/SaveClip.App_784816349_17904710598542850_7495085394432988796_n.jpg';
import stealthViolet from '../../bp/SaveClip.App_784902862_17904710643542850_1976316808147532641_n.jpg';
import cityOverlook from '../../bp/SaveClip.App_784979935_17904710622542850_6092263303484030888_n.jpg';
import kineticLeap from '../../bp/SaveClip.App_786282177_17904710676542850_1749730413418382940_n.jpg';
import crimsonMoon from '../../bp/SaveClip.App_786287715_17904710400542850_830491942225350499_n.jpg';
import sideProfile from '../../bp/SaveClip.App_786422948_17904710421542850_5890592006359074080_n.jpg';

export interface VaultVisual {
  id: string;
  title: string;
  subtitle: string;
  category: 'operator' | 'kinetic' | 'recon' | 'cyber';
  categoryLabel: string;
  image: string;
  thumbnail?: string;
  aspect: 'portrait' | 'landscape' | 'square';
  lore: string;
  stats: {
    resonance: string;
    vibraniumGrade: string;
    tacticalZone: string;
  };
  tags: string[];
}

export const vaultVisuals: VaultVisual[] = [
  {
    id: 'charan-operator',
    title: 'CHARAN KUMAR // THE BLACK PANTHER',
    subtitle: 'Primary Operator Protocol · Wakanda Forever Stance',
    category: 'operator',
    categoryLabel: 'OPERATOR PROTOCOL',
    image: charanHero,
    thumbnail: charanAvatar,
    aspect: 'portrait',
    lore: 'Charan Kumar armored in the ceremonial Vibranium habit. Nanotech weave engineered to absorb kinetic energy and redistribute it into resilient distributed software architectures.',
    stats: {
      resonance: '432.8 THz (Pure Vibranium)',
      vibraniumGrade: 'Grade-X Nano-Weave',
      tacticalZone: 'Birnin Zana Command Citadel',
    },
    tags: ['Operator', 'Wakanda Forever', 'Vibranium Suit', 'Charan Kumar'],
  },
  {
    id: 'vibranium-burst',
    title: 'KINETIC SHOCKWAVE DISCHARGE',
    subtitle: 'Vibranium Dust Burst · Radial Shockwave',
    category: 'kinetic',
    categoryLabel: 'KINETIC ENERGY',
    image: vibraniumBurst,
    aspect: 'portrait',
    lore: 'Maximum kinetic discharge releasing stored impact momentum as an explosive ultraviolet vibranium pulse wave.',
    stats: {
      resonance: '912.4 THz (Peak Release)',
      vibraniumGrade: 'Kinetic Capacitor 100%',
      tacticalZone: 'Great Mound Facility',
    },
    tags: ['Kinetic Pulse', 'Purple Shockwave', 'Vibranium Dust', 'Combat Stance'],
  },
  {
    id: 'cyber-glitch',
    title: 'KIMOYO CYBER GLITCH MATRIX',
    subtitle: 'Holographic Neural Uplink · Cyan & Magenta Weave',
    category: 'cyber',
    categoryLabel: 'CYBER WAKANDA',
    image: cyberGlitch,
    aspect: 'portrait',
    lore: 'Digital kimoyo transmission glitching across quantum encrypted nodes. A fusion of ancient tribal dignity and futuristic digital computing.',
    stats: {
      resonance: '654.1 THz (Quantum Link)',
      vibraniumGrade: 'Kimoyo Mesh 4.0',
      tacticalZone: 'Shuri Research Laboratory',
    },
    tags: ['Cyberpunk', 'Hologram', 'Quantum Matrix', 'Neural Link'],
  },
  {
    id: 'city-overlook',
    title: 'METROPOLIS RECONNAISSANCE',
    subtitle: 'Skyscraper Sentinel · Midnight Skyline',
    category: 'recon',
    categoryLabel: 'TACTICAL RECON',
    image: cityOverlook,
    aspect: 'portrait',
    lore: 'Perched high atop a skyscraper parapet overlooking the metropolis. Observing distributed system nodes and enterprise architecture at scale.',
    stats: {
      resonance: '315.6 THz (Stealth Frequency)',
      vibraniumGrade: 'Silent Prowl Nanofibers',
      tacticalZone: 'Sector 7 Highrise District',
    },
    tags: ['Metropolis', 'Night Prowl', 'Skyline', 'Architecture'],
  },
  {
    id: 'kinetic-charge',
    title: 'CYAN KINETIC VECTOR SURGE',
    subtitle: 'Overclocked Suit Circuitry · High-Speed Trajectory',
    category: 'kinetic',
    categoryLabel: 'KINETIC ENERGY',
    image: kineticCharge,
    aspect: 'portrait',
    lore: 'Electric blue and cyan energy channels illuminating the suit during supersonic acceleration and distributed API payload routing.',
    stats: {
      resonance: '840.2 THz (Overdrive Mode)',
      vibraniumGrade: 'Superconducting Weave',
      tacticalZone: 'Upper Atmospheric Corridor',
    },
    tags: ['Cyan Glow', 'Supersonic', 'Kinetic Surge', 'High-Speed'],
  },
  {
    id: 'crimson-moon',
    title: 'BAST’S CRIMSON MOON SENTINEL',
    subtitle: 'Blood Moon Outcropping · Solitary Guardian',
    category: 'recon',
    categoryLabel: 'TACTICAL RECON',
    image: crimsonMoon,
    aspect: 'portrait',
    lore: 'The Panther watching in stillness under the celestial glow of a giant crimson moon, drawing strength from the Panther Goddess Bast.',
    stats: {
      resonance: '520.0 THz (Lunar Resonance)',
      vibraniumGrade: 'Midnight Obsidian',
      tacticalZone: 'Warrior Falls Outcropping',
    },
    tags: ['Crimson Moon', 'Bast', 'Warrior Falls', 'Guardian'],
  },
  {
    id: 'kinetic-leap',
    title: 'APEX PREDATOR VECTOR LEAP',
    subtitle: 'Mid-Air Trajectory · Magenta Muscle Glow',
    category: 'kinetic',
    categoryLabel: 'KINETIC ENERGY',
    image: kineticLeap,
    aspect: 'portrait',
    lore: 'Full kinetic propulsion launched horizontally. The habit flexes with biomechanical precision, distributing loads across micro-dampers.',
    stats: {
      resonance: '780.9 THz (Dynamic Vector)',
      vibraniumGrade: 'Kinetic Absorber Array',
      tacticalZone: 'Border Tribe Savanna',
    },
    tags: ['Mid-Air Leap', 'Magenta Aura', 'Dynamic Vector', 'Agility'],
  },
  {
    id: 'ready-strike',
    title: 'GROUND-LEVEL POUNCE READINESS',
    subtitle: 'Low Center of Gravity · Claws Primed',
    category: 'kinetic',
    categoryLabel: 'KINETIC ENERGY',
    image: readyStrike,
    aspect: 'portrait',
    lore: 'Crouched in low combat stance, claws ready to shred through any concurrency deadlock or latency bottleneck in the pipeline.',
    stats: {
      resonance: '488.3 THz (Primed State)',
      vibraniumGrade: 'Vibranium Claw Alloy',
      tacticalZone: 'Jabari Mountain Ridge',
    },
    tags: ['Combat Stance', 'Claws', 'Low Prowl', 'Readiness'],
  },
  {
    id: 'sunset-prowl',
    title: 'GOLDEN HOUR VERTICAL CLIMB',
    subtitle: 'Wall Cling Infiltration · Amber Sunset Rim',
    category: 'recon',
    categoryLabel: 'TACTICAL RECON',
    image: sunsetProwl,
    aspect: 'portrait',
    lore: 'Defying gravity across vertical shear surfaces against a golden twilight sky. Silent, undetectable, and completely focused.',
    stats: {
      resonance: '390.5 THz (Passive Damping)',
      vibraniumGrade: 'Magnetic Micro-Treads',
      tacticalZone: 'Mining Tribe Citadel',
    },
    tags: ['Golden Hour', 'Vertical Cling', 'Stealth', 'Infiltration'],
  },
  {
    id: 'sun-gaze',
    title: 'SOLAR MAJESTY & COLLAR ARRAY',
    subtitle: 'Sunlit Detail · Silver Tooth Nanotech Claws',
    category: 'operator',
    categoryLabel: 'OPERATOR PROTOCOL',
    image: sunGaze,
    aspect: 'portrait',
    lore: 'Close-up profile bathed in direct sunlight, revealing the exquisite ceremonial craftsmanship of the silver tooth necklace and golden feline optics.',
    stats: {
      resonance: '610.7 THz (Solar Charge)',
      vibraniumGrade: 'Royal Ceremonial Silver',
      tacticalZone: 'Royal Palace of Birnin Zana',
    },
    tags: ['Solar Flare', 'Silver Teeth', 'Feline Eye', 'Ceremonial'],
  },
  {
    id: 'stealth-violet',
    title: 'SHADOW INFILTRATION WEAVE',
    subtitle: 'Deep Obsidian Void · Violet Kinetic Tracing',
    category: 'recon',
    categoryLabel: 'TACTICAL RECON',
    image: stealthViolet,
    aspect: 'portrait',
    lore: 'Merging seamlessly with the shadows. The suit absorbs 99.8% of ambient photons while subtly radiating violet kinetic readiness.',
    stats: {
      resonance: '280.1 THz (Sub-Visual)',
      vibraniumGrade: 'Photon Absorption Mesh',
      tacticalZone: 'Underground Vibranium Cavern',
    },
    tags: ['Shadow', 'Void', 'Stealth Weave', 'Violet Tracing'],
  },
  {
    id: 'side-profile',
    title: 'MINIMALIST OBSIDIAN PROFILE',
    subtitle: 'Deep Purple Ambient Gradient · Sleek Silhouette',
    category: 'cyber',
    categoryLabel: 'CYBER WAKANDA',
    image: sideProfile,
    aspect: 'portrait',
    lore: 'Minimalist execution highlighting the sculpted contours of the Panther mask. Pure focus, zero compromise.',
    stats: {
      resonance: '499.0 THz (Harmonic Balance)',
      vibraniumGrade: 'Obsidian Composite',
      tacticalZone: 'Central Archive Vault',
    },
    tags: ['Minimalist', 'Profile', 'Purple Gradient', 'Sleek'],
  },
];

export { charanHero, charanAvatar };
