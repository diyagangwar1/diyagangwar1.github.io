uniform float time;
uniform vec3 activationPoints[10];
uniform float activationStrengths[10];
uniform float activationRadius;
uniform float noiseScale;
uniform float amplitude;

varying float activation;
varying vec3 vNormal;
varying vec3 vPosition;

// Simplex noise functions
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
  // First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

  // Other corners
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  // Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

  // Gradients: 41 points uniformly over a line, mapped onto a diamond.
  // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  // Normalise gradients implicitly by scaling m
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

  // Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  // Calculate base noise
  float noise = snoise(position.xy * noiseScale + time * 0.05) * 0.5;
  
  // Calculate activation based on distance to interaction points
  float totalActivation = 0.0;
  vec3 newPosition = position;
  
  // Add ripple effect
  for(int i = 0; i < 10; i++) {
    if (activationStrengths[i] > 0.0) {
      float dist = distance(position, activationPoints[i]);
      float time = time * 2.0;
      
      // Create expanding rings
      float ripple = sin(dist * 0.3 - time * 2.0) * 0.5 + 0.5;
      ripple *= exp(-dist * 0.1); // Fade with distance
      ripple *= activationStrengths[i]; // Scale by activation strength
      
      // Add ripple to displacement
      newPosition.z += ripple * 2.0;
      
      // Add to total activation for color effects
      float activation = activationStrengths[i] * exp(-dist / activationRadius);
      totalActivation += activation;
    }
  }
  
  // Clamp activation between 0 and 1
  totalActivation = clamp(totalActivation, 0.0, 1.0);
  
  // Apply base displacement based on noise and activation
  newPosition.z += (noise + totalActivation) * amplitude;
  
  // Calculate normal for lighting
  vec3 transformedNormal = normalize(normalMatrix * normal);
  
  // Pass values to fragment shader
  activation = totalActivation;
  vNormal = transformedNormal;
  vPosition = newPosition;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
