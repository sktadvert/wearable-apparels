"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
  Torus,
  Stars,
  Trail,
} from "@react-three/drei";
import { useRef, useMemo, useEffect, useState, useCallback } from "react";
import * as THREE from "three";

/* ───────────────────────── Hero Gold Sphere ───────────────────────── */
function GoldSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<any>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.rotation.x = t * 0.08;
      ref.current.rotation.y = t * 0.12;
      ref.current.position.y = Math.sin(t * 0.4) * 0.15;
    }
    if (materialRef.current) {
      materialRef.current.distort = 0.2 + Math.sin(t * 0.8) * 0.1;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.8}>
      <Sphere ref={ref} args={[1.8, 256, 256]} position={[2.5, 0, 0]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#c9a96e"
          roughness={0.08}
          metalness={0.98}
          distort={0.2}
          speed={1.8}
          envMapIntensity={3}
        />
      </Sphere>
    </Float>
  );
}

/* ───────────────────────── Orbiting Rings ───────────────────────── */
function OrbitRing({
  radius,
  thickness,
  speed,
  tilt,
  opacity,
}: {
  radius: number;
  thickness: number;
  speed: number;
  tilt: [number, number, number];
  opacity: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z += speed * 0.005;
      ref.current.rotation.x = tilt[0] + Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
    }
  });

  return (
    <Torus
      ref={ref}
      args={[radius, thickness, 64, 256]}
      position={[2.5, 0, 0]}
      rotation={tilt}
    >
      <meshStandardMaterial
        color="#c9a96e"
        roughness={0.2}
        metalness={0.95}
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
      />
    </Torus>
  );
}

/* ───────────────────────── Floating Orbiter ───────────────────────── */
function Orbiter({ radius, speed, size, yOffset }: { radius: number; speed: number; size: number; yOffset: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    if (ref.current) {
      ref.current.position.x = 2.5 + Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = yOffset + Math.sin(t * 2) * 0.3;
    }
  });

  return (
    <Trail
      width={0.5}
      length={8}
      color="#c9a96e"
      attenuation={(t) => t * t}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color="#c9a96e"
          emissive="#c9a96e"
          emissiveIntensity={2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Trail>
  );
}

/* ───────────────────────── DNA Helix Particles ───────────────────────── */
function HelixParticles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 600;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const goldColor = new THREE.Color("#c9a96e");
    const blueColor = new THREE.Color("#2a4a7f");

    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 8;
      const radius = 5 + Math.sin(t * 0.5) * 2;
      const strand = i % 2 === 0 ? 1 : -1;

      pos[i * 3] = Math.cos(t) * radius * 0.5 * strand;
      pos[i * 3 + 1] = (i / count) * 40 - 20;
      pos[i * 3 + 2] = Math.sin(t) * radius * 0.5 * strand;

      const mix = Math.random();
      const c = goldColor.clone().lerp(blueColor, mix * 0.3);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ───────────────────────── Dust Particles ───────────────────────── */
function DustField() {
  const ref = useRef<THREE.Points>(null!);
  const count = 1500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 35;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#c9a96e"
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ───────────────────────── Light Beam ───────────────────────── */
function LightBeam() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.03 + Math.sin(state.clock.elapsedTime * 0.5) * 0.015;
    }
  });

  return (
    <mesh ref={ref} position={[2.5, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
      <coneGeometry args={[8, 30, 32, 1, true]} />
      <meshBasicMaterial
        color="#c9a96e"
        transparent
        opacity={0.03}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ───────────────────────── Scroll Camera ───────────────────────── */
function ScrollCamera() {
  const { camera } = useThree();
  const scrollRef = useRef(0);
  const targetRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetRef.current = Math.min(window.scrollY / Math.max(maxScroll, 1), 1);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    // Smooth interpolation
    scrollRef.current += (targetRef.current - scrollRef.current) * 0.05;
    const t = scrollRef.current;
    const time = state.clock.elapsedTime;

    // Cinematic camera path — orbits around the sphere as you scroll
    const angle = t * Math.PI * 0.6;
    camera.position.x = Math.sin(angle) * 4 + Math.sin(time * 0.08) * 0.08;
    camera.position.y = -t * 3 + Math.cos(time * 0.1) * 0.05;
    camera.position.z = 8 - t * 3 + Math.cos(angle) * 2;

    // Always look toward the sphere
    const lookTarget = new THREE.Vector3(
      2.5 - t * 2.5,
      -t * 1.5,
      0
    );
    camera.lookAt(lookTarget);
  });

  return null;
}

/* ───────────────────────── Mouse Parallax Light ───────────────────────── */
function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null!);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x += (mouse.current.x * 8 - lightRef.current.position.x) * 0.05;
      lightRef.current.position.y += (mouse.current.y * 5 - lightRef.current.position.y) * 0.05;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 0, 6]}
      intensity={0.6}
      color="#c9a96e"
      distance={20}
    />
  );
}

/* ───────────────────────── Main Scene ───────────────────────── */
export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
      >
        <fog attach="fog" args={["#0a0a0a", 10, 40]} />

        {/* Lighting */}
        <ambientLight intensity={0.15} />
        <directionalLight
          position={[8, 10, 5]}
          intensity={1.5}
          color="#fff5e0"
          castShadow
        />
        <pointLight position={[-8, -5, 8]} intensity={0.5} color="#c9a96e" distance={25} />
        <pointLight position={[10, 5, -8]} intensity={0.2} color="#3a5f9f" distance={20} />
        <spotLight
          position={[2.5, 15, 5]}
          intensity={0.8}
          angle={0.3}
          penumbra={1}
          color="#c9a96e"
          distance={30}
        />
        <MouseLight />

        {/* Main elements */}
        <GoldSphere />

        {/* Orbital rings */}
        <OrbitRing radius={3} thickness={0.02} speed={1} tilt={[0.6, 0, 0]} opacity={0.5} />
        <OrbitRing radius={3.5} thickness={0.015} speed={-0.7} tilt={[1.2, 0.4, 0.2]} opacity={0.35} />
        <OrbitRing radius={4} thickness={0.01} speed={0.5} tilt={[0.9, 0.8, 0.5]} opacity={0.2} />
        <OrbitRing radius={2.2} thickness={0.025} speed={1.3} tilt={[0.3, 0.2, 0.1]} opacity={0.6} />

        {/* Orbiting particles with trails */}
        <Orbiter radius={3.2} speed={0.4} size={0.06} yOffset={0} />
        <Orbiter radius={4.0} speed={-0.3} size={0.04} yOffset={0.5} />
        <Orbiter radius={2.5} speed={0.6} size={0.05} yOffset={-0.3} />

        {/* Atmospheric particles */}
        <HelixParticles />
        <DustField />
        <LightBeam />

        {/* Background stars */}
        <Stars
          radius={80}
          depth={80}
          count={2000}
          factor={4}
          saturation={0}
          fade
          speed={0.3}
        />

        <ScrollCamera />
      </Canvas>
    </div>
  );
}
