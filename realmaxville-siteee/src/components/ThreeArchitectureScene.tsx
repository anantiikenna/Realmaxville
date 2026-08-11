"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type TowerSpec = {
  x: number;
  z: number;
  width: number;
  depth: number;
  height: number;
  color: number;
};

const towerSpecs: TowerSpec[] = [
  { x: -4.2, z: -0.3, width: 1.45, depth: 1.05, height: 4.9, color: 0x24313a },
  { x: -2.25, z: 0.5, width: 1.05, depth: 1.25, height: 6.2, color: 0x172329 },
  { x: -0.65, z: -0.2, width: 1.35, depth: 1.15, height: 7.8, color: 0x2a312b },
  { x: 1.35, z: 0.25, width: 1.2, depth: 1.2, height: 5.7, color: 0x1b2930 },
  { x: 3.15, z: -0.55, width: 1.55, depth: 1, height: 4.5, color: 0x332a25 },
];

export default function ThreeArchitectureScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x111512, 9, 22);

    const camera = new THREE.PerspectiveCamera(
      42,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );
    camera.position.set(6.2, 5.5, 9.8);
    camera.lookAt(0, 2.9, 0);

    const ambient = new THREE.HemisphereLight(0xf7f1de, 0x141615, 1.55);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffd58f, 3.1);
    keyLight.position.set(-4, 7, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const tealLight = new THREE.PointLight(0x1de0c3, 45, 12);
    tealLight.position.set(3.2, 3.4, 3);
    scene.add(tealLight);

    const root = new THREE.Group();
    scene.add(root);

    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x263123,
      roughness: 0.64,
      metalness: 0.12,
    });
    const base = new THREE.Mesh(new THREE.BoxGeometry(9, 0.16, 4.8), baseMaterial);
    base.position.y = -0.08;
    base.receiveShadow = true;
    root.add(base);

    const roadMaterial = new THREE.MeshStandardMaterial({
      color: 0x101211,
      roughness: 0.72,
      metalness: 0.2,
    });
    const road = new THREE.Mesh(new THREE.BoxGeometry(10.6, 0.04, 0.44), roadMaterial);
    road.position.set(0, 0.02, 2.15);
    root.add(road);

    const glassMaterial = new THREE.MeshStandardMaterial({
      color: 0x7fc8c0,
      emissive: 0x23564e,
      emissiveIntensity: 0.55,
      roughness: 0.18,
      metalness: 0.65,
      transparent: true,
      opacity: 0.72,
    });
    const copperMaterial = new THREE.MeshStandardMaterial({
      color: 0xc0804f,
      roughness: 0.32,
      metalness: 0.75,
    });
    const windowMaterial = new THREE.MeshStandardMaterial({
      color: 0xffe2a4,
      emissive: 0xf1b75d,
      emissiveIntensity: 1.5,
      roughness: 0.22,
      metalness: 0.2,
    });

    towerSpecs.forEach((spec, towerIndex) => {
      const tower = new THREE.Group();
      tower.position.set(spec.x, spec.height / 2, spec.z);

      const body = new THREE.Mesh(
        new THREE.BoxGeometry(spec.width, spec.height, spec.depth),
        new THREE.MeshStandardMaterial({
          color: spec.color,
          roughness: 0.48,
          metalness: 0.35,
        }),
      );
      body.castShadow = true;
      body.receiveShadow = true;
      tower.add(body);

      const glazing = new THREE.Mesh(
        new THREE.BoxGeometry(spec.width + 0.025, spec.height * 0.82, 0.035),
        glassMaterial,
      );
      glazing.position.set(0, 0.2, spec.depth / 2 + 0.025);
      tower.add(glazing);

      const crown = new THREE.Mesh(
        new THREE.BoxGeometry(spec.width + 0.25, 0.14, spec.depth + 0.2),
        copperMaterial,
      );
      crown.position.y = spec.height / 2 + 0.11;
      crown.castShadow = true;
      tower.add(crown);

      const windowRows = Math.max(4, Math.floor(spec.height));
      for (let row = 0; row < windowRows; row += 1) {
        const y = -spec.height / 2 + 0.65 + row * 0.78;
        for (let column = 0; column < 2; column += 1) {
          if ((row + column + towerIndex) % 3 === 0) continue;
          const pane = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.24, 0.025), windowMaterial);
          pane.position.set((column - 0.5) * spec.width * 0.42, y, spec.depth / 2 + 0.055);
          tower.add(pane);
        }
      }

      root.add(tower);
    });

    const atrium = new THREE.Mesh(
      new THREE.CylinderGeometry(0.95, 1.25, 2.5, 6, 1, false),
      new THREE.MeshStandardMaterial({
        color: 0x8bd7ca,
        emissive: 0x17433f,
        emissiveIntensity: 0.95,
        roughness: 0.14,
        metalness: 0.72,
        transparent: true,
        opacity: 0.62,
      }),
    );
    atrium.position.set(0.1, 1.25, 1.05);
    atrium.rotation.y = Math.PI / 6;
    atrium.castShadow = true;
    root.add(atrium);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffc978,
      transparent: true,
      opacity: 0.72,
    });
    const railCurves: THREE.Line[] = [];
    for (let i = 0; i < 5; i += 1) {
      const points: THREE.Vector3[] = [];
      for (let j = 0; j < 54; j += 1) {
        const t = j / 53;
        points.push(
          new THREE.Vector3(
            -5.1 + t * 10.2,
            0.12 + i * 0.07,
            2.12 + Math.sin(t * Math.PI * 2 + i) * 0.18,
          ),
        );
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, lineMaterial);
      railCurves.push(line);
      root.add(line);
    }

    const grid = new THREE.GridHelper(12, 24, 0x78c9bd, 0x2c3a33);
    grid.position.y = 0.006;
    grid.material.transparent = true;
    grid.material.opacity = 0.24;
    root.add(grid);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 90;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 13;
      positions[i * 3 + 1] = 0.6 + Math.random() * 7.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: 0xf3cc86,
        size: 0.035,
        transparent: true,
        opacity: 0.65,
      }),
    );
    root.add(particles);

    let pointerX = 0;
    let pointerY = 0;
    let animationFrame = 0;
    const clock = new THREE.Clock();

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const onResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    mount.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onResize);

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      root.rotation.y = -0.42 + Math.sin(elapsed * 0.24) * 0.08 + pointerX * 0.08;
      root.rotation.x = pointerY * 0.035;
      particles.rotation.y = elapsed * 0.035;
      atrium.rotation.y = Math.PI / 6 + elapsed * 0.18;
      railCurves.forEach((line, index) => {
        line.position.x = Math.sin(elapsed * 1.2 + index) * 0.04;
      });
      camera.position.x = 6.2 + pointerX * 0.5;
      camera.position.y = 5.5 - pointerY * 0.22;
      camera.lookAt(0, 2.9, 0);
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      mount.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.Line) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 h-full w-full"
      data-testid="three-architecture-scene"
      aria-hidden="true"
    />
  );
}
