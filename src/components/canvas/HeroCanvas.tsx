"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  attribute float aScale;
  attribute float aNoteIndex;
  varying float vNoteIndex;

  void main() {
    vNoteIndex = aNoteIndex;
    vec3 pos = position;

    // Subtle organic fluid motion
    float waveX = sin(uTime * 0.3 + pos.y * 1.0) * 0.2;
    float waveY = cos(uTime * 0.25 + pos.x * 0.8) * 0.2;
    pos.x += waveX;
    pos.y += waveY;

    // Gentle cursor repulsion
    vec2 dir = pos.xy - uMouse;
    float dist = length(dir);
    if (dist < 2.0) {
      pos.xy += normalize(dir) * (2.0 - dist) * 0.1;
    }

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    
    // Reduced particle rendering scale for subtle appearance
    gl_PointSize = aScale * (100.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying float vNoteIndex;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    float alpha = smoothstep(0.5, 0.0, dist);

    // Perfume palette: Primary (#F36371), Soft Pink (#FFD8DF), Black (#000000)
    vec3 primaryColor = vec3(0.953, 0.388, 0.443);
    vec3 softAccent = vec3(1.0, 0.847, 0.874);
    vec3 blackNote = vec3(0.0, 0.0, 0.0);

    vec3 finalColor = primaryColor;
    if (vNoteIndex > 0.5 && vNoteIndex < 1.5) {
      finalColor = softAccent;
    } else if (vNoteIndex >= 1.5) {
      finalColor = blackNote;
    }

    // Lower opacity (0.35) so text remains ultra-readable
    gl_FragColor = vec4(finalColor, alpha * 0.35);
  }
`;

function ParticleNotes() {
	const meshRef = useRef<THREE.Points>(null!);
	const mouseRef = useRef<[number, number]>([0, 0]);

	// Reduced particle count for a lighter, breathable aesthetic
	const count = 400;

	const { positions, scales, noteIndices } = useMemo(() => {
		const pos = new Float32Array(count * 3);
		const sc = new Float32Array(count);
		const indices = new Float32Array(count);

		for (let i = 0; i < count; i++) {
			// Wider distribution to keep the center clean for typography
			pos[i * 3] = (Math.random() - 0.5) * 11;
			pos[i * 3 + 1] = (Math.random() - 0.5) * 7;
			pos[i * 3 + 2] = (Math.random() - 0.5) * 3;

			sc[i] = Math.random() * 0.7 + 0.2;
			indices[i] = i % 3;
		}

		return { positions: pos, scales: sc, noteIndices: indices };
	}, [count]);

	const uniforms = useMemo(
		() => ({
			uTime: { value: 0 },
			uMouse: { value: new THREE.Vector2(0, 0) },
		}),
		[],
	);

	useFrame((state) => {
		const { clock, pointer } = state;
		if (meshRef.current) {
			const material = meshRef.current.material as THREE.ShaderMaterial;
			material.uniforms.uTime.value = clock.getElapsedTime();

			mouseRef.current[0] +=
				(pointer.x * 4.0 - mouseRef.current[0]) * 0.03;
			mouseRef.current[1] +=
				(pointer.y * 3.0 - mouseRef.current[1]) * 0.03;
			material.uniforms.uMouse.value.set(
				mouseRef.current[0],
				mouseRef.current[1],
			);

			meshRef.current.rotation.y = clock.getElapsedTime() * 0.01;
		}
	});

	return (
		<points ref={meshRef}>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes-position"
					args={[positions, 3]}
				/>
				<bufferAttribute
					attach="attributes-aScale"
					args={[scales, 1]}
				/>
				<bufferAttribute
					attach="attributes-aNoteIndex"
					args={[noteIndices, 1]}
				/>
			</bufferGeometry>
			<shaderMaterial
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				uniforms={uniforms}
				transparent
				depthWrite={false}
			/>
		</points>
	);
}

export default function HeroCanvas() {
	return (
		<div className="absolute inset-0 z-0 pointer-events-none">
			<Canvas
				camera={{ position: [0, 0, 5], fov: 60 }}
				gl={{ antialias: true, alpha: true }}
			>
				<ParticleNotes />
			</Canvas>
		</div>
	);
}
