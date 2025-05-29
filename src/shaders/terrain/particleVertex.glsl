uniform float time;
uniform float size;
uniform float activationRadius;
uniform vec3 activationPoints[10];
uniform float activationStrengths[10];

attribute float scale;
attribute vec3 velocity;

varying float vActivation;

void main() {
  // Calculate activation based on distance to interaction points
  float totalActivation = 0.0;
  for(int i = 0; i < 10; i++) {
    if (activationStrengths[i] > 0.0) {
      float dist = distance(position, activationPoints[i]);
      float activation = activationStrengths[i] * exp(-dist / activationRadius);
      totalActivation += activation;
    }
  }
  
  // Clamp activation between 0 and 1
  totalActivation = clamp(totalActivation, 0.0, 1.0);
  
  // Pass activation to fragment shader
  vActivation = totalActivation;
  
  // Calculate position with slight movement
  vec3 newPosition = position;
  newPosition += velocity * (sin(time) * 0.5 + 0.5) * 0.2;
  
  // Calculate size based on activation
  float particleSize = size * (1.0 + totalActivation * 2.0);
  
  // Set vertex position
  vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = particleSize * (300.0 / -mvPosition.z);
}
