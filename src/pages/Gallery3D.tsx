
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Environment, useTexture, ContactShadows, MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { marlanImages } from '../constants/constants';


function GalleryFrame({ url, position, index }: { url: string; position: [number, number, number]; index: number }) {
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


export default function Gallery3D() {
  // Arrange images in a gentle arc
  const images = Object.values(marlanImages);
  const radius = 5;
  const angleStep = images.length > 1 ? Math.PI / (images.length - 1) : 0;
  return (
    <section
      id="gallery"
      className="min-h-screen py-16 px-2 md:px-8 flex flex-col items-center dark:bg-black"
      style={{
        background: 'radial-gradient(ellipse at top, #232526 0%, #000 100%)',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-yellow-400 mb-8 text-center drop-shadow-lg"
      >
        3D Gallery
      </motion.h2>
      <div className="w-full max-w-6xl h-[320px] sm:h-[420px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/30 relative">
        <Canvas camera={{ position: [0, 0.5, 9], fov: 60 }} shadows dpr={[1.5, 2.5]}>
          {/* Lighting */}
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[6, 8, 8]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          {/* Soft contact shadow under frames */}
          <ContactShadows position={[0, -1.1, 0]} opacity={0.45} width={15} height={15} blur={2.5} far={10} />
          {/* Reflective floor */}
          <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[30, 30]} />
            <MeshReflectorMaterial
              blur={[400, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={8}
              roughness={0.7}
              depthScale={1.2}
              minDepthThreshold={0.4}
              color="#181818"
              metalness={0.4}
            />
          </mesh>
          {/* Gallery frames in an arc */}
          {images.map((img, i) => {
            const angle = -Math.PI / 2 + i * angleStep;
            const x = radius * Math.cos(angle);
            const z = radius * Math.sin(angle);
            return (
              <GalleryFrame
                key={img}
                url={img}
                position={[x, 0, z]}
                index={i}
              />
            );
          })}
          <Environment preset="city" background={false} />
          <OrbitControls enableZoom enablePan={false} autoRotate autoRotateSpeed={1.1} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 3.2} />
        </Canvas>
        {/* Optional: subtle vignette overlay for focus */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45) 100%)',
        }} />
      </div>
      <div className="mt-4 text-yellow-400 text-sm text-center">If an image fails to load, a gold placeholder will appear.</div>
    </section>
  );
}
