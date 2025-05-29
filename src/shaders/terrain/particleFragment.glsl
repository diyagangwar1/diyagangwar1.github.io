uniform vec3 baseColor;
uniform vec3 activeColor;
uniform float time;

varying float vActivation;

void main() {
  // Calculate distance from center of point (for circular particles)
  vec2 center = gl_PointCoord - 0.5;
  float dist = length(center);
  
  // Discard pixels outside the circle
  if (dist > 0.5) discard;
  
  // Calculate color based on activation
  vec3 color = mix(baseColor, activeColor, vActivation);
  
  // Add pulsing effect
  float pulse = sin(time * 3.0) * 0.5 + 0.5;
  float alpha = smoothstep(0.5, 0.0, dist) * (0.5 + vActivation * 0.5);
  
  // Add glow effect for activated particles
  if (vActivation > 0.2) {
    alpha += vActivation * pulse * 0.3;
    color = mix(color, activeColor, pulse * 0.3);
  }
  
  gl_FragColor = vec4(color, alpha);
}
