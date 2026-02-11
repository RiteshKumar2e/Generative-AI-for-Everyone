import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sparkles, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import '../styles/Components.css';

const BokehBlooms = () => {
    return (
        <group>
            {/* Soft, large professional color blooms */}
            <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[10, 5, -15]} scale={15}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshBasicMaterial color="#818cf8" transparent opacity={0.1} blending={THREE.NormalBlending} />
                </mesh>
            </Float>
            <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[-12, -8, -10]} scale={20}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshBasicMaterial color="#0ea5e9" transparent opacity={0.08} blending={THREE.NormalBlending} />
                </mesh>
            </Float>
            <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[5, -10, -12]} scale={12}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshBasicMaterial color="#db2777" transparent opacity={0.06} blending={THREE.NormalBlending} />
                </mesh>
            </Float>
        </group>
    );
};

const DigitalDust = () => {
    const pointsRef = useRef();
    const { mouse } = useThree();
    const count = 2500;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
            pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, mouse.y * 0.1, 0.05);
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#64748b"
                transparent
                opacity={0.4}
                sizeAttenuation={true}
                blending={THREE.NormalBlending}
            />
        </points>
    );
};

const GlassSlabs = () => {
    return (
        <group>
            {[1, 2, 3].map((i) => (
                <Float key={i} speed={1.5} rotationIntensity={1} floatIntensity={1} offset={i * 100}>
                    <mesh
                        position={[(i - 2) * 8, Math.sin(i) * 3, -5]}
                        rotation={[Math.random(), Math.random(), 0]}
                    >
                        <boxGeometry args={[4, 6, 0.1]} />
                        <meshPhysicalMaterial
                            color="#ffffff"
                            transparent
                            opacity={0.15}
                            roughness={0.1}
                            metalness={0.1}
                            transmission={0.5}
                            thickness={1}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
};

const ThreeBackground = () => {
    return (
        <div className="canvas-bg" style={{ background: 'linear-gradient(to bottom, #fcfdfe, #f8fafc)', overflow: 'hidden' }}>
            <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
                <fog attach="fog" args={['#f8fafc', 5, 40]} />

                <BokehBlooms />
                <DigitalDust />
                <GlassSlabs />

                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={3} color="#ffffff" />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
