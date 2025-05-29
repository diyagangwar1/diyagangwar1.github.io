// import React, { useEffect } from "react";
// import "../styles/Hero.css";

// export default function Hero() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "/particle-image.min.js";
//     script.async = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div
//       id="particle-image"
//       data-params-src="/params.json"
//       style={{ width: "100vw", height: "100vh" }}
//     ></div>
//   );
// }


import React from "react";
import "../styles/Hero.css";

import FullWidthNeuralTerrainHero from './hero/FullWidthNeuralTerrianHero';

export default function Hero() {
  return (
    <div className="home-page">
      {/* <NeuralTerrainHero /> */}
      {/* Rest of your homepage content */}
    </div>
  );
}

