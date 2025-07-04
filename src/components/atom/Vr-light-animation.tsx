"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import type * as THREE from "three";
import Image from "next/image";

function StarField() {
  const ref = useRef<THREE.Points>(null!);

  // Generate stars in a cone-shaped area (vision field)
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(800 * 3); // 800 stars, 3 coordinates each
    const colors = new Float32Array(800 * 3); // RGB for each star

    for (let i = 0; i < 800; i++) {
      // Create stars in a cone/frustum shape (field of view)
      const distance = Math.random() * 20 + 5; // Distance from viewer
      const angle = Math.random() * Math.PI * 0.6 - Math.PI * 0.3; // 60-degree cone
      const elevation = Math.random() * Math.PI * 0.4 - Math.PI * 0.2; // Vertical spread

      // Convert spherical to cartesian coordinates
      const x = distance * Math.sin(angle) * Math.cos(elevation);
      const y = distance * Math.sin(elevation);
      const z = distance * Math.cos(angle) * Math.cos(elevation);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Random star colors (white, blue, yellow, red)
      const colorType = Math.random();
      if (colorType < 0.6) {
        // White stars (most common)
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;
      } else if (colorType < 0.8) {
        // Blue stars
        colors[i * 3] = 0.7;
        colors[i * 3 + 1] = 0.8;
        colors[i * 3 + 2] = 1;
      } else if (colorType < 0.95) {
        // Yellow stars
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 0.7;
      } else {
        // Red stars
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0.7;
        colors[i * 3 + 2] = 0.7;
      }
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Rotate the entire star field
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y += 0.002;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        size={0.05}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.8}
      />
    </Points>
  );
}

function ShootingStars() {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={ref}>
      {[...Array(3)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * 2) * 8,
            Math.cos(i * 1.5) * 3,
            Math.cos(i * 2) * 8,
          ]}
        >
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="blue" transparent opacity={1} />
        </mesh>
      ))}
    </group>
  );
}

export default function Component() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-8">
      <div className="relative w-full max-w-2xl aspect-[3/4] overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dcgghkk7q/image/upload/v1751483632/VR_y0uxoh.png"
            alt="vision"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            clipPath: "ellipse(200px 150px at 50% 35%)",
          }}
        >
          <Canvas
            camera={{
              position: [0, 0, 0],
              fov: 60,
              near: 0.1,
              far: 100,
            }}
            style={{
              background: "transparent",
            }}
          >
            <ambientLight intensity={0.5} />

            <StarField />

            <ShootingStars />

            <mesh position={[0, 0, -15]}>
              <planeGeometry args={[30, 30]} />
              <meshBasicMaterial color="#1a0033" transparent opacity={0.3} />
            </mesh>
          </Canvas>
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 200px 150px at 50% 35%, 
              rgba(0, 0, 50, 0.1) 0%, 
              transparent 100%)`,
          }}
        />
      </div>
    </div>
  );
}
