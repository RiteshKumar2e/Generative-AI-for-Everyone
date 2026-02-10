import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import '../styles/Components.css';

const AnimatedSphere = () => {
    const sphereRef = useRef();

    useFrame((state) => {
        const { clock } = state;
        if (sphereRef.current) {
            sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.4}>
                <MeshDistortMaterial
                    color="#0ea5e9"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.1}
                    metalness={0.5}
                />
            </Sphere>
        </Float>
    );
};

const ThreeBackground = () => {
    return (
        <div className="canvas-bg">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#0ea5e9" />
                <pointLight position={[-10, -10, -10]} intensity={2} color="#7c3aed" />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
