'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';

// Major immigrant origin countries for Minneapolis-St. Paul
const originCountries = [
  { name: 'Somalia', lat: 5.1521, lng: 46.1996, population: 42000, color: 0x00ff88 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528, population: 145000, color: 0xff6b00 },
  { name: 'Laos', lat: 19.8563, lng: 102.4955, population: 35000, color: 0x6b88ff },
  { name: 'Vietnam', lat: 14.0583, lng: 108.2772, population: 38000, color: 0xffdd00 },
  { name: 'India', lat: 20.5937, lng: 78.9629, population: 28000, color: 0xff00dd },
  { name: 'China', lat: 35.8617, lng: 104.1954, population: 32000, color: 0x00ddff },
];

const clinicMarkers = [
  { name: 'Bloomington', lat: 44.8408, lng: -93.2983, diversity: 68 },
  { name: 'Blaine', lat: 45.1607, lng: -93.2349, diversity: 52 },
  { name: 'Lake Elmo', lat: 44.9955, lng: -92.8788, diversity: 45 },
  { name: 'Plymouth', lat: 45.0105, lng: -93.4555, diversity: 38 },
];

export function Globe3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0f1e);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Enhanced Earth globe
    const globeGeometry = new THREE.SphereGeometry(5, 64, 64);
    
    const vertexShader = `
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    
    const fragmentShader = `
      varying vec2 vUv;
      varying vec3 vNormal;
      uniform float time;
      
      void main() {
        float continent = step(0.3, fract(sin(vUv.x * 10.0) * cos(vUv.y * 8.0) * 43758.5453));
        vec3 oceanColor = vec3(0.05, 0.15, 0.35);
        vec3 landColor = vec3(0.15, 0.35, 0.20);
        vec3 color = mix(oceanColor, landColor, continent);
        
        float rim = 1.0 - max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0)));
        vec3 rimColor = vec3(0.2, 0.5, 1.0) * pow(rim, 3.0);
        
        gl_FragColor = vec4(color + rimColor, 1.0);
      }
    `;

    const globeMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: { time: { value: 0 } },
    });

    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(5.2, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.2, 0.5, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Convert lat/lng to 3D coordinates
    const latLngToVector3 = (lat: number, lng: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const x = -(radius * Math.sin(phi) * Math.cos(theta));
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      return new THREE.Vector3(x, y, z);
    };

    const mspLat = 44.9778;
    const mspLng = -93.2650;

    // Add clinic markers
    const markerGroup = new THREE.Group();
    clinicMarkers.forEach((marker) => {
      const position = latLngToVector3(marker.lat, marker.lng, 5.1);
      
      const markerGeometry = new THREE.SphereGeometry(0.08, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff88,
      });
      const markerMesh = new THREE.Mesh(markerGeometry, markerMaterial);
      markerMesh.position.copy(position);
      
      const ringGeometry = new THREE.RingGeometry(0.1, 0.15, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(position);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      
      markerGroup.add(markerMesh);
      markerGroup.add(ring);
    });
    scene.add(markerGroup);

    // Add origin country arcs
    const originGroup = new THREE.Group();
    originCountries.forEach((origin) => {
      const originPos = latLngToVector3(origin.lat, origin.lng, 5.1);
      const mspPos = latLngToVector3(mspLat, mspLng, 5.1);
      
      const originMarkerGeometry = new THREE.SphereGeometry(0.06, 16, 16);
      const originMarkerMaterial = new THREE.MeshBasicMaterial({
        color: origin.color,
      });
      const originMarker = new THREE.Mesh(originMarkerGeometry, originMarkerMaterial);
      originMarker.position.copy(originPos);
      originGroup.add(originMarker);

      const curve = new THREE.QuadraticBezierCurve3(
        originPos,
        new THREE.Vector3().lerpVectors(originPos, mspPos, 0.5).normalize().multiplyScalar(7),
        mspPos
      );
      
      const arcPoints = curve.getPoints(50);
      const arcGeometry = new THREE.BufferGeometry().setFromPoints(arcPoints);
      const arcMaterial = new THREE.LineBasicMaterial({
        color: origin.color,
        transparent: true,
        opacity: 0.4,
      });
      const arc = new THREE.Line(arcGeometry, arcMaterial);
      originGroup.add(arc);
    });
    scene.add(originGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      time += 0.01;
      globe.rotation.y += 0.002;
      atmosphere.rotation.y += 0.001;
      markerGroup.rotation.y += 0.002;
      originGroup.rotation.y += 0.002;
      
      if (globeMaterial.uniforms.time) {
        globeMaterial.uniforms.time.value = time;
      }
      
      markerGroup.children.forEach((child, index) => {
        if (index % 2 === 1) {
          const scale = 1 + Math.sin(time * 2 + index) * 0.2;
          child.scale.set(scale, scale, 1);
        }
      });

      renderer.render(scene, camera);
    };

    animate();
    setIsLoading(false);

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-6 border border-white/10 h-[600px] relative overflow-hidden"
    >
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Globe2 className="w-5 h-5 text-blue-400" />
          <h2 className="text-xl font-bold text-white">Global Migration Patterns</h2>
        </div>
        <p className="text-sm text-gray-400">
          Interactive 3D visualization showing immigrant origin countries to Minneapolis-St. Paul
        </p>
      </div>

      <div ref={containerRef} className="w-full h-[calc(100%-120px)] rounded-xl overflow-hidden" />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
          <div className="text-white">Loading 3D Globe...</div>
        </div>
      )}

      <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4 border border-white/10">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="text-xs text-gray-300">Noran Locations</span>
          </div>
          <div className="flex gap-4 flex-wrap">
            {originCountries.slice(0, 3).map((origin) => (
              <div key={origin.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: `#${origin.color.toString(16).padStart(6, '0')}` }}
                ></div>
                <span className="text-xs text-gray-300">
                  {origin.name} ({(origin.population / 1000).toFixed(0)}K)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
