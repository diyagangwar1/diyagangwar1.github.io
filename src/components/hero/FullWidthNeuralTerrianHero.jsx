// FullWidthNeuralTerrainHero.jsx with Optimized Blue Grid
import React, { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Performance settings based on device
const getPerformanceSettings = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isLowEnd = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
    && !/Chrome|Safari|Firefox/i.test(navigator.userAgent);
  
  return {
    segments: isLowEnd ? 16 : (isMobile ? 24 : 32),
    animationSpeed: isLowEnd ? 0.5 : 1,
    updateFrequency: isLowEnd ? 2 : 1, // Only update every nth frame
  };
};

export default function FullWidthNeuralTerrainHero() {
  const [activationPoints, setActivationPoints] = useState([]);
  const containerRef = useRef();
  const frameCount = useRef(0);
  const settings = useMemo(() => getPerformanceSettings(), []);

  const fullScreenStyle = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    zIndex: -1,
  };

  const addActivationPoint = useCallback((point, strength = 1.0) => {
    setActivationPoints(prev => {
      const newPoints = [...prev];
      if (newPoints.length >= 10) {
        newPoints.shift();
      }
      newPoints.push({
        position: point,
        strength,
        createdAt: Date.now(),
      });
      return newPoints;
    });
  }, []);

  // Add initial points
  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      const point = new THREE.Vector3(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        0
      );
      addActivationPoint(point, 0.8);
    }
  }, [addActivationPoint]);

  // Handle mouse interaction
  const handleInteraction = useCallback((event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 100;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 100;
    addActivationPoint(new THREE.Vector3(x, y, 0), 1.0);
  }, [addActivationPoint]);

  // Add event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener('mousemove', handleInteraction);
    container.addEventListener('click', handleInteraction);
    return () => {
      container.removeEventListener('mousemove', handleInteraction);
      container.removeEventListener('click', handleInteraction);
    };
  }, [handleInteraction]);

  // Optimized Blue Terrain
  function BlueTerrain() {
    const meshRef = useRef();
    const materialRef = useRef();
    
    // Memoize the geometry to prevent recreation
    const geometry = useMemo(() => 
      new THREE.PlaneGeometry(100, 100, settings.segments, settings.segments),
    [settings.segments]);

    useFrame((state) => {
      if (!meshRef.current) return;
      
      // Skip frames based on performance settings
      frameCount.current = (frameCount.current + 1) % settings.updateFrequency;
      if (frameCount.current !== 0) return;

      const time = state.clock.getElapsedTime() * settings.animationSpeed;
      const positions = meshRef.current.geometry.attributes.position.array;
      
      // Simplified wave calculation
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        positions[i + 2] = Math.sin(x * 0.05 + time) * Math.cos(y * 0.05 + time) * 1.5;
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
    });

    return (
      <mesh
        ref={meshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -5, 0]}
        geometry={geometry}
      >
        <meshPhongMaterial 
          ref={materialRef}
          color="#4285F4" 
          wireframe={true} 
          side={THREE.DoubleSide}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
    );
  }

  return (
    <div ref={containerRef} style={fullScreenStyle}>
      <Canvas 
        style={{ background: '#000' }}
        dpr={[1, 2]} // Limit pixel ratio for better performance
        performance={{ min: 0.5 }} // Allow frame rate to drop to maintain performance
      >
        <PerspectiveCamera makeDefault position={[0, 30, 60]} fov={60} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.0} />
        <BlueTerrain />
        <OrbitControls 
          enableZoom={true} 
          enablePan={true} 
          rotateSpeed={0.5}
          enableDamping={true}
          dampingFactor={0.05}
          maxDistance={100}
          minDistance={20}
        />
      </Canvas>
      {/* Overlay content */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>Diya Gangwar</h1>
        <p style={{ fontSize: '1.5rem', margin: 0 }}>Software Engineer & Computer Science Student</p>
      </div>
    </div>
  );
}
