"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const nodeColours = ["#65d8c1", "#f1a36c", "#a99bff", "#73cce5", "#ef91b8", "#f0c36c"];

function Network() {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const coreMaterial = useMemo(() => new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 modelPosition = modelViewMatrix * vec4(position, 1.0);
        vPosition = position;
        gl_Position = projectionMatrix * modelPosition;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        float band = sin(vPosition.y * 8.0 + uTime * 0.55) * 0.5 + 0.5;
        vec3 mint = vec3(0.28, 0.83, 0.70);
        vec3 violet = vec3(0.55, 0.48, 0.96);
        vec3 amber = vec3(0.96, 0.66, 0.39);
        vec3 colour = mix(mint, violet, band);
        colour = mix(colour, amber, smoothstep(0.72, 1.0, band) * 0.55);
        float light = 0.48 + 0.52 * abs(dot(normalize(vNormal), normalize(vec3(0.4, 0.7, 1.0))));
        gl_FragColor = vec4(colour * light, 0.94);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    transparent: true
  }), []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.16) * 0.12;
    }
    if (core.current) {
      core.current.rotation.y += delta * 0.18;
      coreMaterial.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const nodes = Array.from({ length: 22 }, (_, i) => {
    const angle = (i / 22) * Math.PI * 2;
    const radius = 1.05 + (i % 3) * 0.34;
    return {
      position: [Math.cos(angle) * radius, Math.sin(angle * 1.7) * 0.48, Math.sin(angle) * radius] as [number, number, number],
      colour: nodeColours[i % nodeColours.length],
      size: i % 5 === 0 ? 0.075 : 0.038
    };
  });

  return (
    <group ref={group}>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.43, 3]} />
        <primitive object={coreMaterial} attach="material" />
      </mesh>
      {nodes.map((node, i) => (
        <group key={i} position={node.position}>
          <mesh>
            <sphereGeometry args={[node.size, 16, 16]} />
            <meshStandardMaterial color={node.colour} emissive={node.colour} emissiveIntensity={0.18} roughness={0.32} />
          </mesh>
        </group>
      ))}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.15, 0.006, 8, 100]} />
        <meshBasicMaterial color="#65d8c1" transparent opacity={0.52} />
      </mesh>
      <mesh rotation={[0.9, 0.4, 0.2]}>
        <torusGeometry args={[1.62, 0.004, 8, 100]} />
        <meshBasicMaterial color="#f1a36c" transparent opacity={0.38} />
      </mesh>
      <mesh rotation={[0.3, 0.9, 0.7]}>
        <torusGeometry args={[1.38, 0.003, 8, 100]} />
        <meshBasicMaterial color="#a99bff" transparent opacity={0.32} />
      </mesh>
    </group>
  );
}

export function OrbitalScene() {
  return (
    <div className="orbital-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.4], fov: 42 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1.3} />
        <pointLight position={[2, 2, 3]} intensity={2} />
        <Network />
      </Canvas>
    </div>
  );
}
