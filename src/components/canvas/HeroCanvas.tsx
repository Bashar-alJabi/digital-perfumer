"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
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

    // Organic wave motion
    float waveX = sin(uTime * 0.3 + pos.y * 1.0) * 0.25;
    float waveY = cos(uTime * 0.25 + pos.x * 0.8) * 0.25;
    pos.x += waveX;
    pos.y += waveY;

    // Cursor repulsion
    vec2 dir = pos.xy - uMouse;
    float dist = length(dir);
    if (dist < 2.5) {
      pos.xy += normalize(dir) * (2.5 - dist) * 0.15;
    }

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aScale * (120.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying float vNoteIndex;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    float alpha = smoothstep(0.5, 0.0, dist);

    // Color definitions
    vec3 primaryColor = vec3(0.953, 0.388, 0.443);
    vec3 softAccent = vec3(1.0, 0.847, 0.874);
    vec3 blackNote = vec3(0.1, 0.1, 0.1);

    vec3 finalColor = primaryColor;
    if (vNoteIndex > 0.5 && vNoteIndex < 1.5) {
      finalColor = softAccent;
    } else if (vNoteIndex >= 1.5) {
      finalColor = blackNote;
    }

    gl_FragColor = vec4(finalColor, alpha * 0.4);
  }
`;

function ParticleNotes() {
	const meshRef = useRef<THREE.Points>(null!);
	const mouseRef = useRef<[number, number]>([0, 0]);
	const targetMouseRef = useRef<[number, number]>([0, 0]);

	const count = 450;

	// Global window mouse listener for smooth interactions
	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const x = (event.clientX / window.innerWidth) * 2 - 1;
			const y = -(event.clientY / window.innerHeight) * 2 + 1;
			targetMouseRef.current = [x * 5, y * 3];
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const { positions, scales, noteIndices } = useMemo(() => {
		const pos = new Float32Array(count * 3);
		const sc = new Float32Array(count);
		const indices = new Float32Array(count);

		for (let i = 0; i < count; i++) {
			pos[i * 3] = (Math.random() - 0.5) * 12;
			pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
			pos[i * 3 + 2] = (Math.random() - 0.5) * 4;

			sc[i] = Math.random() * 0.8 + 0.3;
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
		const { clock } = state;
		if (meshRef.current) {
			const material = meshRef.current.material as THREE.ShaderMaterial;
			material.uniforms.uTime.value = clock.getElapsedTime();

			// Smooth linear interpolation (lerp) for mouse reaction
			mouseRef.current[0] +=
				(targetMouseRef.current[0] - mouseRef.current[0]) * 0.05;
			mouseRef.current[1] +=
				(targetMouseRef.current[1] - mouseRef.current[1]) * 0.05;

			material.uniforms.uMouse.value.set(
				mouseRef.current[0],
				mouseRef.current[1],
			);

			meshRef.current.rotation.y = clock.getElapsedTime() * 0.015;
		}
	});

	return (
		<points ref={meshRef}>
			<bufferGeometry>
				<bufferAttribute attach="attributes-position" args={[positions, 3]} />
				<bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
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
