"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, type Group, type Mesh } from "three";
import { useRef } from "react";
import { projects } from "@/data/projects";

type Props = { onSelect: (slug: string) => void; active: string | null; reduced: boolean };

function ProjectPlanes({ onSelect, active, reduced }: Props) {
  const textures = useLoader(TextureLoader, projects.map((project) => project.image));
  const group = useRef<Group>(null);
  const planes = useRef<(Mesh | null)[]>([]);
  useFrame((state, delta) => {
    if (!group.current || reduced) return;
    const targetX = state.pointer.x * 0.16;
    const targetY = -state.pointer.y * 0.12;
    group.current.rotation.y += (targetX - group.current.rotation.y) * Math.min(1, delta * 2.2);
    group.current.rotation.x += (targetY - group.current.rotation.x) * Math.min(1, delta * 2.2);
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.22) * 0.045;
  });
  const positions = [
    [-4.45, 1.48, -0.45], [-1.48, 1.48, -0.12], [1.48, 1.48, 0.12], [4.45, 1.48, -0.25],
    [-4.45, -1.42, 0.08], [-1.48, -1.42, -0.3], [1.48, -1.42, -0.05], [4.45, -1.42, -0.42]
  ] as const;
  return <group ref={group}>
    {projects.map((project, index) => {
      const selected = active === project.slug;
      return <group key={project.slug} position={positions[index]} rotation={[0, (index % 2 ? -0.045 : 0.045), (index % 3 - 1) * 0.018]}>
        <mesh
          ref={(node) => { planes.current[index] = node; }}
          scale={selected ? [1.075, 1.075, 1] : [1, 1, 1]}
          position={[0, selected ? 0.12 : 0, selected ? 0.34 : 0]}
          onPointerOver={(event) => { event.stopPropagation(); document.body.style.cursor = "pointer"; }}
          onPointerOut={() => { document.body.style.cursor = "auto"; }}
          onClick={(event) => { event.stopPropagation(); onSelect(project.slug); }}
        >
          <planeGeometry args={[2.72, 1.72, 1, 1]} />
          <meshBasicMaterial map={textures[index]} toneMapped={false} />
        </mesh>
        <mesh position={[0, 0, -0.035]}>
          <planeGeometry args={[2.78, 1.78]} />
          <meshBasicMaterial color="#e8e8e8" />
        </mesh>
      </group>;
    })}
  </group>;
}

export function UnveilGalleryScene({ onSelect, active, reduced }: Props) {
  return <div className="unveil-scene">
    <Canvas camera={{ position: [0, 0, 12.6], fov: 38 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }} onCreated={({ gl }) => { gl.setClearColor("#ffffff", 0); }}>
      <ambientLight intensity={1.1} />
      <ProjectPlanes onSelect={onSelect} active={active} reduced={reduced} />
    </Canvas>
  </div>;
}
