import React, { useEffect, useRef } from 'react';

function isColorDark(rgb) {
  if (!rgb) return false;
  const result = rgb.match(/\d+/g);
  if (!result) return false;
  const [r, g, b] = result.map(Number);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
}

const DotCursor = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const moveDot = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;

        // Get the element under the cursor
        const elem = document.elementFromPoint(e.clientX, e.clientY);
        let bg = window.getComputedStyle(elem).backgroundColor;

        // If transparent, walk up the DOM tree
        let parent = elem;
        while ((bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') && parent.parentElement) {
          parent = parent.parentElement;
          bg = window.getComputedStyle(parent).backgroundColor;
        }

        // Set dot color based on background brightness
        if (isColorDark(bg)) {
          dotRef.current.style.background = '#fff';
        } else {
          dotRef.current.style.background = '#111';
        }
      }
    };
    document.addEventListener('mousemove', moveDot);
    return () => document.removeEventListener('mousemove', moveDot);
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '18px',
        height: '18px',
        background:'#ffffffda',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.12s cubic-bezier(0.22, 1, 0.36, 1), top 0.12s cubic-bezier(0.22, 1, 0.36, 1), background 0.2s',
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
      }}
    />
  );
};

export default DotCursor; 