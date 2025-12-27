import { useFrame, useThree } from '@react-three/fiber';
import { Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect } from 'react';
import { useState, useRef } from 'react';

const GalleryFrame = ({ url, position, index }: { url: string; position: [number, number, number]; index: number }) => {
    const [error, setError] = useState(false);
    const meshRef = useRef<any>(null);
    const texture = useTexture(url);
    const { gl } = useThree();
    useEffect(() => {
        if (texture) {
            texture.anisotropy = gl.capabilities.getMaxAnisotropy();
        if ('colorSpace' in texture && THREE.SRGBColorSpace) {
            texture.colorSpace = THREE.SRGBColorSpace;
        }
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.needsUpdate = true;
        }else {
            setError(true);
        }
    }, [texture, gl]);
    // Animate floating and rotation
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() + index) * 0.15;
            meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 1.2 + index) * 0.15;
        }
    });
    // Hover effect
    const [hovered, setHovered] = useState(false);
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
        {error ? (
            <mesh
                ref={meshRef}
                position={position}
                castShadow
                scale={hovered ? 1.15 : 1}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <torusKnotGeometry args={[0.8, 0.3, 128, 32]} />
                <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
            </mesh>
        ) : (
            <mesh
                ref={meshRef}
                position={position}
                castShadow
                scale={hovered ? 1.12 : 1}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <boxGeometry args={[2, 1.2, 0.1]} />
                <meshStandardMaterial map={texture} toneMapped={true} />
            </mesh>
        )}
        </Float>
    );
}


export default GalleryFrame;