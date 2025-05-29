import { useState, useEffect, useCallback, useRef } from 'react';
import * as THREE from 'three';
import config from '../config/neuralNetworkConfig';

export default function useNeuralActivation() {
  // State for activation points
  const [activationPoints, setActivationPoints] = useState([]);
  
  // Ref to store the previous frame's activation points
  const prevPointsRef = useRef([]);
  
  // Add a new activation point
  const addActivationPoint = useCallback((point, strength = 1.0) => {
    setActivationPoints(prev => {
      // If we've reached the maximum number of points, remove the oldest one
      const newPoints = [...prev];
      if (newPoints.length >= config.network.maxActivationPoints) {
        newPoints.shift();
      }
      
      // Add the new point
      newPoints.push({
        position: point,
        strength,
        createdAt: Date.now(),
      });
      
      return newPoints;
    });
  }, []);
  
  // Update activation points (decay strength over time)
  useEffect(() => {
    if (activationPoints.length === 0) return;
    
    const intervalId = setInterval(() => {
      setActivationPoints(prev => {
        return prev
          .map(point => ({
            ...point,
            // Adjust decay rate (0.05 = slow decay, 0.2 = fast decay)
            strength: point.strength * (1 - 0.08),
          }))
          .filter(point => point.strength > 0.05);
      });
    }, 100); // Update every 100ms
    
    return () => clearInterval(intervalId);
  }, [activationPoints.length]);
  
  // Convert activation points to uniforms for shaders
  const getActivationUniforms = useCallback(() => {
    // Create arrays for positions and strengths
    const positions = [];
    const strengths = [];
    
    // Fill arrays with data from activation points
    activationPoints.forEach(point => {
      positions.push(point.position.x, point.position.y, point.position.z);
      strengths.push(point.strength);
    });
    
    // Fill remaining slots with zeros
    for (let i = activationPoints.length; i < config.network.maxActivationPoints; i++) {
      positions.push(0, 0, 0);
      strengths.push(0);
    }
    
    // Create Three.js uniform objects
    return {
      activationPoints: { value: positions },
      activationStrengths: { value: strengths },
      activationRadius: { value: config.network.activationRadius },
    };
  }, [activationPoints]);
  
  // Store previous points for interpolation
  useEffect(() => {
    prevPointsRef.current = activationPoints;
  }, [activationPoints]);
  
  return {
    activationPoints,
    addActivationPoint,
    getActivationUniforms,
  };
}
