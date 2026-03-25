"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export default function ScrollCamera() {
  const { camera } = useThree();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    const t = scrollProgress;
    const time = state.clock.elapsedTime;

    // Cinematic camera path
    camera.position.x = Math.sin(t * Math.PI * 0.5) * 3 + Math.sin(time * 0.1) * 0.1;
    camera.position.y = t * -2 + Math.sin(time * 0.15) * 0.1;
    camera.position.z = 7 - t * 4;

    // Gentle rotation following scroll
    camera.rotation.x = t * -0.15;
    camera.rotation.y = Math.sin(t * Math.PI * 0.3) * 0.1;
  });

  return null;
}
