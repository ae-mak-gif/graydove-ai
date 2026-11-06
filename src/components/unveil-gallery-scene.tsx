"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, SRGBColorSpace, type Group } from "three";
import { useRef } from "react";
import type { Project } from "@/data/projects";

type Props = { projects: Project[]; onSelect: (slug: string) => void; onHover: (slug: string | null) => void; active: string | null; reduced: boolean };

function ProjectPlanes({ projects, onSelect, onHover, active, reduced }: Props) {
  const textures = useLoader(TextureLoader, projects.map((project) => project.image));
  const group = useRef<Group | null>(null);
  textures.forEach((texture) => { texture.colorSpace = SRGBColorSpace; });
  useFrame((state, delta) => {
    if (!group.current || reduced) return;
    const targetX = state.pointer.x * 0.16;
    const targetY = -state.pointer.y * 0.12;
    group.current.rotation.y += (targetX - group.current.rotation.y) * Math.min(1, delta * 2.2);
    group.current.rotation.x += (targetY - group.current.rotation.x) * Math.min(1, delta * 2.2);
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.22) * 0.045;
  });
  const positions = [
    [-5.25, -1.05, -1.35], [-3.75, -0.76, -0.9], [-2.25, -0.43, -0.48], [-0.75, -0.12, -0.12],
    [0.75, 0.12, 0.08], [2.25, 0.43, -0.18], [3.75, 0.76, -0.55], [5.25, 1.05, -1.05]
  ] as const;
  return <group ref={group}>
    {projects.map((project, index) => {
      const selected = active === project.slug;
      const position = positions[index] ?? [0, 0, 0];
      return <group key={project.slug} position={position} rotation={[0, (index % 2 ? -0.11 : 0.11), (index - 3.5) * 0.025]}>
        <mesh
          scale={selected ? [1.12, 1.12, 1] : [1, 1, 1]}
          position={[0, selected ? 0.12 : 0, selected ? 0.62 : 0]}
          onPointerOver={(event) => { event.stopPropagation(); document.body.style.cursor = "pointer"; onHover(project.slug); }}
          onPointerOut={() => { document.body.style.cursor = "auto"; onHover(null); }}
          onClick={(event) => { event.stopPropagation(); onSelect(project.slug); }}
        >
          <planeGeometry args={[2.72, 1.72]} />
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

export function UnveilGalleryScene(props: Props) {
  return <div className="unveil-scene" aria-hidden="true">
    <Canvas camera={{ position: [0, 0, 12.6], fov: 38 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }} onCreated={({ gl }) => { gl.setClearColor("#ffffff", 0); }}>
      <ambientLight intensity={1.1} />
      <ProjectPlanes {...props} />
    </Canvas>
  </div>;
}
