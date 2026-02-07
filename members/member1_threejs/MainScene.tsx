import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const MainScene: React.FC = () => {
    const meshRef = useRef<any>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5;
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'hotpink'} />
        </mesh>
    );
};
