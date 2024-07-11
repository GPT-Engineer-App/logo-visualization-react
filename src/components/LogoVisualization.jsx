import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const LogoVisualization = () => {
  const logoTexture = useTexture('/logo.png'); // Ensure the logo is saved as logo.png in the public directory
  const particlesRef = useRef();

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Plane args={[5, 5]} position={[0, 0, 0]}>
        <meshBasicMaterial attach="material" map={logoTexture} />
      </Plane>
      <points ref={particlesRef}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={['attributes', 'position']}
            array={new Float32Array(Array.from({ length: 10000 }).flatMap(() => [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]))}
            count={10000}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial attach="material" color="white" size={0.05} />
      </points>
    </Canvas>
  );
};

export default LogoVisualization;