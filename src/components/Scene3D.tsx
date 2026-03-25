"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  Sphere,
  Torus,
  Stars,
  Environment,
} from "@react-three/drei";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";

function GoldSphere() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1.5}>
      <Sphere ref={ref} args={[2, 128, 128]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#c9a96e"
          roughness={0.15}
          metalness={0.95}
          distort={0.3}
          speed={1.5}
          envMapIntensity={2}
        />
      </Sphere>
    </Float>
  );
}

function GlassRing({ position, rotation, scale }: { position: [number, number, number]; rotation: [number, number, number]; scale: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.003;
      ref.current.rotation.z += 0.002;
    }
  });

  return (
    <Torus ref={ref} args={[3.2 * scale, 0.04, 32, 128]} position={position} rotation={rotation}>
      <meshStandardMaterial
        color="#c9a96e"
        roughness={0.3}
        metalness={0.9}
        transparent
        opacity={0.4}
      />
    </Torus>
  );
}

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null!);

  const { positions, sizes } = useMemo(() => {
    const count = 800;
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
      sz[i] = Math.random() * 0.03 + 0.005;
    }
    return { positions: pos, sizes: sz };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#c9a96e"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function ScrollCamera() {
  const { camera } = useThree();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    const progress = Math.min(scrollY / 3000, 1);
    camera.position.z = 7 - progress * 2;
    camera.position.y = progress * -1;
    camera.rotation.x = progress * -0.1;
  });

  return null;
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#0a0a0a", 8, 30]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#fff8e7" castShadow />
        <pointLight position={[-6, -4, 6]} intensity={0.8} color="#c9a96e" distance={20} />
        <pointLight position={[6, 4, -6]} intensity={0.3} color="#4a90d9" distance={15} />
        <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.5} penumbra={1} color="#c9a96e" />

        <GoldSphere />
        <GlassRing position={[0, 0, 0]} rotation={[0.5, 0, 0]} scale={1} />
        <GlassRing position={[0, 0, 0]} rotation={[1.2, 0.5, 0.3]} scale={1.15} />
        <GlassRing position={[0, 0, 0]} rotation={[0.8, 1, 0.6]} scale={0.85} />
        <FloatingParticles />
        <Stars radius={60} depth={60} count={1500} factor={3} saturation={0} fade speed={0.5} />
        <ScrollCamera />
      </Canvas>
    </div>
  );
}
