"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Plane, shaderMaterial } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const WaveShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color(0.2, 0.4, 0.8),
    uResolution: new THREE.Vector2(1, 1),
  },
  // vertex shader
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
  // fragment shader
  `
    varying vec2 vUv;
    varying float vWave;
    uniform float uTime;
    uniform vec3 uColor;
    uniform vec2 uResolution;
    
    void main() {
      float wave = vWave * 2.0;
      vec3 color = uColor + wave;
      
      float gradient = smoothstep(0.0, 1.0, vUv.y);
      color = mix(color, vec3(0.1, 0.2, 0.4), gradient);
      
      gl_FragColor = vec4(color, 0.8);
    }
  `
);

extend({ WaveShaderMaterial });

function AnimatedPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
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
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <AnimatedPlane />
      </Canvas>
    </div>
  );
}
