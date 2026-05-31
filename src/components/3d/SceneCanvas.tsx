import { Canvas } from "@react-three/fiber";
import { ParticleBackground, FloatingShapes } from ".";

interface SceneCanvasProps {
  showParticles?: boolean;
  showShapes?: boolean;
}

export function SceneCanvas({ showParticles = true, showShapes = true }: SceneCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      className="absolute inset-0 pointer-events-none z-0"
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {showParticles && <ParticleBackground particleCount={150} particleSize={0.08} particleColor="#06b6d4" />}
      {showShapes && <FloatingShapes />}
    </Canvas>
  );
}
