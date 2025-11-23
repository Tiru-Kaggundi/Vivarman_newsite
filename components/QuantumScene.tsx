/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Stars, Environment, OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

const TradeRoute = ({ start, end, color }: { start: [number, number, number], end: [number, number, number], color: string }) => {
    // Simple curved line simulation
    const mid = [
        (start[0] + end[0]) / 2 + (Math.random() - 0.5) * 2,
        (start[1] + end[1]) / 2 + (Math.random() - 0.5) * 2,
        (start[2] + end[2]) / 2 + (Math.random() - 0.5) * 2
    ];
    
    const points = [new THREE.Vector3(...start), new THREE.Vector3(...mid as any), new THREE.Vector3(...end)];
    const curve = new THREE.CatmullRomCurve3(points);
    const linePoints = curve.getPoints(20);

    return (
        <Line points={linePoints} color={color} lineWidth={1} transparent opacity={0.3} />
    )
}

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group>
        {/* Main Globe Sphere */}
        <Sphere ref={meshRef} args={[2.5, 64, 64]}>
        <meshStandardMaterial 
            color="#1A3C34" 
            emissive="#0F231E"
            emissiveIntensity={0.2}
            roughness={0.7}
            metalness={0.2}
            wireframe={true}
        />
        </Sphere>
        
        {/* Inner Solid Core */}
        <Sphere args={[2.4, 32, 32]}>
            <meshStandardMaterial color="#0F231E" transparent opacity={0.9} />
        </Sphere>
        
        {/* Abstract Trade Nodes */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            {[...Array(8)].map((_, i) => {
                 const phi = Math.acos(-1 + (2 * i) / 8);
                 const theta = Math.sqrt(8 * Math.PI) * phi;
                 const x = 2.5 * Math.cos(theta) * Math.sin(phi);
                 const y = 2.5 * Math.sin(theta) * Math.sin(phi);
                 const z = 2.5 * Math.cos(phi);
                 return (
                     <mesh key={i} position={[x, y, z]}>
                         <sphereGeometry args={[0.08, 16, 16]} />
                         <meshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={2} />
                     </mesh>
                 )
            })}
        </Float>
    </group>
  );
};

export const GlobeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#C5A059" />
        <spotLight position={[-10, -10, -5]} intensity={1} color="#1A3C34" />
        
        <Globe />
        
        <Environment preset="city" />
        {/* Subtle background particles */}
        <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={1} />
        
        {/* Mouse interaction */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
