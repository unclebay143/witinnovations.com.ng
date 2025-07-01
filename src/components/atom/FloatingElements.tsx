"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Sphere, Box, Torus } from "@react-three/drei";
import { useRef } from "react";
import { useFrame, type RootState } from "@react-three/fiber";
import type * as THREE from "three";

function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state: RootState) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1} rotationIntensity={1} floatIntensity={2}>
        <Sphere position={[-3, 2, 0]} args={[0.5, 32, 32]}>
          <meshStandardMaterial
            color="#024FF0"
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <Box position={[3, -1, 0]} args={[0.8, 0.8, 0.8]}>
          <meshStandardMaterial
            color="#024FF0"
            metalness={0.6}
            roughness={0.3}
          />
        </Box>
      </Float>

      <Float speed={0.8} rotationIntensity={0.8} floatIntensity={1}>
        <Torus position={[0, -2, -2]} args={[0.6, 0.2, 16, 32]}>
          <meshStandardMaterial
            color="#024FF0"
            metalness={0.7}
            roughness={0.2}
          />
        </Torus>
      </Float>
    </group>
  );
}

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#3b82f6"
        />

        <FloatingGeometry />
      </Canvas>
    </div>
  );
};

export default FloatingElements;
