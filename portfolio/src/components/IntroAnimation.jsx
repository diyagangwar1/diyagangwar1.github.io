import React, { useEffect, useState } from 'react';
import '../styles/IntroAnimation.css';

export default function IntroAnimation({ onFinish }) {
  const [dots, setDots] = useState('');
  
  useEffect(() => {
    let index = 0;

    const dotInterval = setTimeout(() => {
      const interval = setInterval(() => {
        setDots((prev) => prev + '.');
        index++;
        if (index === 3) {
          clearInterval(interval);
          setTimeout(() => {
            onFinish();
          }, 700); // slight pause before switching to homepage
        }
      }, 400);
    }, 1000); // delay before dot animation starts

    return () => clearTimeout(dotInterval);
  }, [onFinish]);

  return (
    <div className="intro-container">
      <div className="fixed-text">
        Hey there, welcome to Diya's corner of the internet<span className="dots">{dots}</span>
      </div>
    </div>
  );
}
