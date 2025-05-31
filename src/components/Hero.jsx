import React from "react";
import "../styles/Hero.css";
import heroVideo from '../assets/m2-res_1080p.mp4'; // Adjust path if needed

export default function Hero() {
  return (
    <div
      className="home-page hero-background"
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "5vh 10vw"
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div
        className="hero-quote"
        style={{
          color: "#eee",
          fontFamily: "'Georgia', 'Playfair Display', serif",
          fontStyle: "italic",
          fontWeight: 100,
          fontSize: "1.5vw",
          lineHeight: "1.7",
          letterSpacing: "0.01em",
          textAlign: "center",
          maxWidth: "900px",
          position: "absolute",
          bottom: "15vh",
          left: "43%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <p style={{ margin: 0 }}>
        AI/ML Engineer | TinyML + LLMs | Building ethical, human-centered systems
        </p>
      </div>
    </div>
  );
}
