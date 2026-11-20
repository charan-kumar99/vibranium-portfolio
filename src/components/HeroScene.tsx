import { useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from '../hooks/useHooks';

function VibraniumCore({ reducedMotion }: { reducedMotion: boolean }) {
  const coreRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!reducedMotion && coreRef.current) {
      coreRef.current.rotation.y += delta * 0.12;
      coreRef.current.rotation.x = Math.sin(performance.now() * 0.00018) * 0.035;
    }
  });

  return (
    <group ref={coreRef} position={[0, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[0.76, 2]} />
        <meshStandardMaterial
          color="#171126"
          metalness={0.86}
          roughness={0.24}
          emissive="#593c9c"
          emissiveIntensity={0.18}
          flatShading
        />
      </mesh>
      <mesh scale={1.015}>
        <icosahedronGeometry args={[0.76, 2]} />
        <meshBasicMaterial color="#a68ae8" wireframe transparent opacity={0.16} />
      </mesh>
      <mesh scale={0.84}>
        <sphereGeometry args={[0.76, 32, 32]} />
        <meshBasicMaterial color="#9270db" transparent opacity={0.075} />
      </mesh>
    </group>
  );
}

function SparseParticles({ reducedMotion }: { reducedMotion: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(54 * 3);
    for (let i = 0; i < 54; i += 1) {
      const angle = i * 2.399963;
      const radius = 1.55 + ((i * 17) % 29) / 10;
      values[i * 3] = Math.cos(angle) * radius;
      values[i * 3 + 1] = Math.sin(angle * 1.17) * (1.05 + ((i * 7) % 13) / 10);
      values[i * 3 + 2] = -1.8 + ((i * 11) % 27) / 10;
    }
    return values;
  }, []);

  useFrame((_, delta) => {
    if (!reducedMotion && pointsRef.current) pointsRef.current.rotation.y += delta * 0.012;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#a69ae0" transparent opacity={0.52} sizeAttenuation />
    </points>
  );
}

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={0.42} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} color="#c6b3ff" />
      <pointLight position={[-2, -1, 2]} intensity={1.4} color="#734fca" distance={6} />
      <pointLight position={[2, 1.8, -2]} intensity={0.45} color="#64cfe0" distance={5} />
      <VibraniumCore reducedMotion={reducedMotion} />
      <SparseParticles reducedMotion={reducedMotion} />
    </>
  );
}

function FallbackCore() {
  return (
    <div className="hero-fallback" aria-hidden="true">
      <div className="hero-fallback-ring hero-fallback-ring--one" />
      <div className="hero-fallback-ring hero-fallback-ring--two" />
      <div className="hero-fallback-core" />
      <span className="hero-fallback-star hero-fallback-star--one" />
      <span className="hero-fallback-star hero-fallback-star--two" />
      <span className="hero-fallback-star hero-fallback-star--three" />
    </div>
  );
}

export default function HeroScene() {
  const reducedMotion = useReducedMotion();
  const supportsWebGL = useMemo(() => {
    try {
      const canvas = document.createElement('canvas');
      return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
    } catch {
      return false;
    }
  }, []);

  if (!supportsWebGL) return <FallbackCore />;

  return (
    <div className="hero-scene-canvas">
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 42 }}
        dpr={[1, Math.min(window.devicePixelRatio || 1, 1.5)]}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        frameloop={reducedMotion ? 'demand' : 'always'}
        style={{ pointerEvents: 'none' }}
      >
        <Suspense fallback={null}>
          <Scene reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
