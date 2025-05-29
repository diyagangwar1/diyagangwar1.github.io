const neuralNetworkConfig = {
  // Terrain parameters
  terrain: {
    width: 100,
    height: 100,
    segments: 128,
    amplitude: 5,
    noiseScale: 0.1,
  },
  // Neural network parameters
  network: {
    maxActivationPoints: 10,
    activationRadius: 15,
    decayRate: 0.05,
    propagationSpeed: 0.8,
  },
  // Visual parameters
  visual: {
    baseColor: '#1a2639',
    activeColor: '#ff7b54',
    wireframe: false,
    particleCount: 1000,
    particleSize: 0.1,
  }
};

export default neuralNetworkConfig;
