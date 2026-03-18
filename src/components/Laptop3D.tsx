"use client";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PresentationControls, Stage } from "@react-three/drei";

export default function Laptop3D() {
  return (
    <div className="w-full h-full min-h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
        <color attach="background" args={["#050505"]} />
        <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
          {/* @ts-ignore - TypeScript Stage bileşenindeki bazı özellikleri tanıyamayabiliyor */}
          <Stage environment="city" intensity={0.5}>
            <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
              <mesh scale={[2, 1.2, 0.1]}>
                <boxGeometry />
                <MeshDistortMaterial color="#00e5ff" speed={2} distort={0.2} />
              </mesh>
            </Float>
          </Stage>
        </PresentationControls>
      </Canvas>
      {/* Üzerine havalı bir ışık efekti */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1),transparent_70%)]" />
    </div>
  );
}