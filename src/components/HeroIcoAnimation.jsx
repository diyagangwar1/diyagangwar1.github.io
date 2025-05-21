import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

// Vertex shader as JS string
const vertexShader = `
// ... existing code ...
vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
// ... (rest of the vertex shader code from your HTML, up to the end)
`;

// Fragment shader as JS string
const fragmentShader = `
// ... existing code ...
#define PHYSICAL
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
// ... (rest of the fragment shader code from your HTML, up to the end)
`;

// Helper to expand palette
function expandPalette(paletteObj) {
  const palette = [];
  for (let x = 0; x < paletteObj.repeat; x++) {
    const colors = paletteObj.shuffle ? shuffle([...paletteObj.colors]) : paletteObj.colors;
    for (let i = 0; i < colors.length; i++) {
      const c = colors[i];
      for (let j = 0; j < c.l; j++) {
        palette.push(c.c);
      }
    }
  }
  if (paletteObj.topColor) {
    for (let i = 0; i < paletteObj.topColorL; i++) palette.push(paletteObj.topColor);
  }
  return palette;
}
function shuffle(o) {
  for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

// Helper to create palette image as data URL
function createPaletteImg(paletteObj) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const palette = expandPalette(paletteObj);
  const texH = 1024;
  const colorH = texH / palette.length;
  canvas.width = 1;
  canvas.height = texH;
  for (let i = 0; i < palette.length; i++) {
    ctx.fillStyle = palette[i];
    ctx.fillRect(0, colorH * i, canvas.width, colorH);
  }
  return canvas.toDataURL();
}

const palleteBlack = {
  colors: [
    { c: '#111111', l: 10 },
    { c: '#ed254e', l: 1 },
    { c: '#f9dc5c', l: 1 },
    { c: '#c2eabd', l: 1 },
    { c: '#011936', l: 1 },
    { c: '#465362', l: 1 },
  ],
  topColor: '#111111',
  topColorL: 5,
  repeat: 20,
  shuffle: true,
};

const theme = {
  pallete: palleteBlack,
  roughness: 0.5,
  metalness: 0.5,
  mapIntensity: 8,
};

export default function HeroIcoAnimation() {
  const mountRef = useRef();
  const animationRef = useRef();
  const rendererRef = useRef();

  useEffect(() => {
    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight;
    let frameId;
    let mouse = { x: 0, y: 0, sx: 0, sy: 0, dx: 0, dy: 0 };
    let rotX = 0, rotY = 0, prevRotX = 0, prevRotY = 0, rotXEase = 0, rotYEase = 0;
    let isDragging = false;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    camera.position.z = 60;
    const ambLight = new THREE.AmbientLight(0xaaaaaa, 2);
    scene.add(ambLight);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Palette texture
    const textureLoader = new THREE.TextureLoader();
    const palleteImg = createPaletteImg(theme.pallete);
    const palleteTexture = textureLoader.load(palleteImg);

    // Geometry & Material
    const geometry = new THREE.IcosahedronBufferGeometry(width > height ? 22 : 15, 7);
    const uniforms = {
      roughness: { value: theme.roughness },
      metalness: { value: theme.metalness },
      envMapIntensity: { value: theme.mapIntensity },
      tExplosion: { value: palleteTexture },
      time: { value: 0.0 },
      diffuse: { value: new THREE.Color(0xffffff) },
      emissive: { value: new THREE.Color(0x000000) },
      opacity: { value: 1.0 },
    };
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      lights: true,
      transparent: true,
    });
    const icoSphere = new THREE.Mesh(geometry, material);
    scene.add(icoSphere);

    // Mouse/touch controls
    function inputstart(e) {
      isDragging = true;
      inputmove(e);
      mouse.dx = 0;
      mouse.dy = 0;
      mouse.sx = mouse.x;
      mouse.sy = mouse.y;
      prevRotX = rotX;
      prevRotY = rotY;
    }
    function inputmove(e) {
      let x, y;
      if (e.type.indexOf('mouse') >= 0) {
        x = e.clientX;
        y = e.clientY;
      } else {
        x = e.changedTouches[0].clientX;
        y = e.changedTouches[0].clientY;
      }
      mouse.x = (x / width) - 0.5;
      mouse.y = (y / height) - 0.5;
      if (isDragging) {
        mouse.dx = mouse.x - mouse.sx;
        mouse.dy = mouse.y - mouse.sy;
      }
    }
    function inputend() {
      isDragging = false;
    }
    renderer.domElement.addEventListener('mousedown', inputstart);
    renderer.domElement.addEventListener('mousemove', inputmove);
    renderer.domElement.addEventListener('mouseup', inputend);
    renderer.domElement.addEventListener('mouseleave', inputend);
    renderer.domElement.addEventListener('touchstart', inputstart, { passive: false });
    renderer.domElement.addEventListener('touchmove', inputmove, { passive: false });
    renderer.domElement.addEventListener('touchend', inputend, { passive: false });

    // Resize
    function handleResize() {
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock(true);
    function animate() {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      rotX = mouse.dy * 2 + prevRotX;
      rotY = mouse.dx * 2 + prevRotY;
      rotXEase += (rotX - rotXEase) * 0.1;
      rotYEase += (rotY - rotYEase) * 0.1;
      icoSphere.rotation.x = rotXEase;
      icoSphere.rotation.y = rotYEase;
      material.uniforms['time'].value = time * 0.4;
      material.uniforms['tExplosion'].value = palleteTexture;
      renderer.render(scene, camera);
    }
    animate();
    animationRef.current = frameId;

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousedown', inputstart);
      renderer.domElement.removeEventListener('mousemove', inputmove);
      renderer.domElement.removeEventListener('mouseup', inputend);
      renderer.domElement.removeEventListener('mouseleave', inputend);
      renderer.domElement.removeEventListener('touchstart', inputstart);
      renderer.domElement.removeEventListener('touchmove', inputmove);
      renderer.domElement.removeEventListener('touchend', inputend);
      mountRef.current.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      palleteTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0 }}
    />
  );
} 