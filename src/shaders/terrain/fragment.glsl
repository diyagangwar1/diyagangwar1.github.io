uniform vec3 baseColor;
uniform vec3 activeColor;
uniform float time;

varying float activation;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  // Base color gradient based on position and activation
  vec3 color = mix(baseColor, activeColor, activation);
  
  // Add subtle pulsing effect to activated areas
  float pulse = sin(time * 2.0) * 0.5 + 0.5;
  color = mix(color, activeColor, activation * pulse * 0.3);
  
  // Simple lighting calculation
  vec3 light = normalize(vec3(0.5, 0.5, 1.0));
  float diff = max(dot(vNormal, light), 0.0);
  
  // Combine diffuse lighting with ambient
  vec3 ambient = color * 0.3;
  vec3 diffuse = color * diff * 0.7;
  vec3 finalColor = ambient + diffuse;
  
  // Add rim lighting effect
  vec3 viewDir = normalize(cameraPosition - vPosition);
  float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
  rim = smoothstep(0.4, 1.0, rim);
  
  // Add rim light only to activated areas
  finalColor += rim * activation * activeColor * 0.5;
  
  gl_FragColor = vec4(finalColor, 1.0);
}
