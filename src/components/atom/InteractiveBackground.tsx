"use client";

import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { Plane, shaderMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const WaveShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color(0.2, 0.4, 0.8),
    uResolution: new THREE.Vector2(1, 1),
  },
  `
    varying vec2 vUv;
    varying float vWave;
    uniform float uTime;
    
    void main() {
      vUv = uv;
      
      vec3 pos = position;
      float wave = sin(pos.x * 4.0 + uTime) * 0.1;
      wave += sin(pos.y * 6.0 + uTime * 0.8) * 0.05;
      
      pos.z += wave;
      vWave = wave;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  `
    varying vec2 vUv;
    varying float vWave;
    uniform float uTime;
    uniform vec3 uColor;
    uniform vec2 uResolution;
    
    void main() {
      float wave = vWave * 2.0;
      vec3 color = uColor + wave;
      
      // gradient from light at top to dark at bottom
      float gradient = smoothstep(0.0, 1.0, vUv.y);
      color = mix(color, vec3(0.05, 0.05, 0.1), gradient); // darker at bottom
      
      gl_FragColor = vec4(color, 0.8);
    }
  `
);

extend({ WaveShaderMaterial });

// Infer the type of the material
type WaveMaterialImpl = typeof WaveShaderMaterial;

function AnimatedPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<InstanceType<WaveMaterialImpl> | null>(null);
  const { size } = useThree();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime;
      materialRef.current.uResolution.set(size.width, size.height);
    }
  });

  return (
    <Plane ref={meshRef} args={[20, 20, 50, 50]}>
      <primitive
        ref={materialRef}
        object={new WaveShaderMaterial()}
        transparent
        attach="material"
      />
    </Plane>
  );
}

export default function InteractiveBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <AnimatedPlane />
      </Canvas>
    </div>
  );
}
