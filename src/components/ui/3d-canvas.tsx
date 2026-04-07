"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Wireframe, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#22c55e" wireframe transparent opacity={0.15} />
      </mesh>
      
      {/* Inner Core */}
      <mesh scale={2}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color="#000000"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0.1}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export function Background3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen gpu-optimize">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]} /* Limit pixel ratio for performance */
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#22c55e" intensity={2} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
