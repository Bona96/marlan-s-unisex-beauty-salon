import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, MeshReflectorMaterial } from '@react-three/drei';
import GalleryFrame from './GalleryFrame';

type GalleryRing3DProps = {
  images: string[];
};

export default function GalleryRing3D({ images }: GalleryRing3DProps) {
  const radius = 5;
  const angleStep = images.length > 1 ? Math.PI / (images.length - 1) : 0;
  return (
    <Canvas camera={{ position: [0, 0.5, 9], fov: 60 }} shadows dpr={[1.5, 2.5]}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[6, 8, 8]} intensity={1.5} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <ContactShadows position={[0, -1.1, 0]} opacity={0.45} width={15} height={15} blur={2.5} far={10} />
      <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <MeshReflectorMaterial blur={[400, 100]} resolution={1024} mixBlur={1} mixStrength={8} roughness={0.7} depthScale={1.2} minDepthThreshold={0.4} color="#181818" metalness={0.4} />
      </mesh>
      {images.map((img, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        return (
          <GalleryFrame key={img} url={img} position={[x, 0, z]} index={i} />
        );
      })}
      <Environment preset="city" background={false} />
      <OrbitControls enableZoom enablePan={false} autoRotate autoRotateSpeed={1.1} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 3.2} />
    </Canvas>
  );
}
