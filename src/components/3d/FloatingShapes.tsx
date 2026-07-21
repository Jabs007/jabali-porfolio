import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingShape {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  shape: "box" | "sphere" | "icosahedron";
}

export function FloatingShapes() {
  const shapesRef = useRef<THREE.Group>(null);
  
  const shapes: FloatingShape[] = useMemo(() => [
    { position: [3, 2, -2], rotation: [0.5, 0.3, 0.2], scale: 0.8, color: "#06b6d4", shape: "icosahedron" },
    { position: [-3, -2, -3], rotation: [0.3, 0.5, 0.1], scale: 0.6, color: "#06b6d4", shape: "sphere" },
    { position: [2, -3, -1], rotation: [0.4, 0.2, 0.3], scale: 0.7, color: "#06b6d4", shape: "box" },
    { position: [-2, 3, -2], rotation: [0.2, 0.4, 0.5], scale: 0.5, color: "#06b6d4", shape: "icosahedron" },
    { position: [0, 0, -4], rotation: [0.6, 0.1, 0.4], scale: 0.9, color: "#06b6d4", shape: "sphere" },
  ], []);

  useFrame((state) => {
    if (shapesRef.current) {
      const time = state.clock.getElapsedTime();
      shapesRef.current.children.forEach((child, index) => {
        child.rotation.x = time * 0.2 + shapes[index].rotation[0];
        child.rotation.y = time * 0.3 + shapes[index].rotation[1];
        child.position.y = shapes[index].position[1] + Math.sin(time + index) * 0.3;
      });
    }
  });

  return (
    <group ref={shapesRef}>
      {shapes.map((shape, index) => (
        <group key={index} position={shape.position} rotation={shape.rotation} scale={shape.scale}>
          {shape.shape === "box" && (
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={shape.color} transparent opacity={0.6} emissive={shape.color} emissiveIntensity={0.5} />
            </mesh>
          )}
          {shape.shape === "sphere" && (
            <mesh>
              <sphereGeometry args={[0.6, 32, 32]} />
              <meshStandardMaterial color={shape.color} transparent opacity={0.6} emissive={shape.color} emissiveIntensity={0.5} />
            </mesh>
          )}
          {shape.shape === "icosahedron" && (
            <mesh>
              <icosahedronGeometry args={[0.7, 0]} />
              <meshStandardMaterial color={shape.color} transparent opacity={0.6} emissive={shape.color} emissiveIntensity={0.5} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}
