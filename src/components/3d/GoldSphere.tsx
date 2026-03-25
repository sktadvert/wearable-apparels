"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function GoldSphere() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.08;
      ref.current.rotation.y = state.clock.elapsedTime * 0.12;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={1.2}>
      <Sphere ref={ref} args={[2, 128, 128]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#c9a96e"
          roughness={0.12}
          metalness={0.97}
          distort={0.25}
          speed={1.2}
          envMapIntensity={2.5}
        />
      </Sphere>
    </Float>
  );
}
