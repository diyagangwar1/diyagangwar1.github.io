import React, { useRef, useEffect, useState } from 'react';
import '../../styles/About_1.css';
// Import follower images
import follower1 from '../../assets/images/follower/1.jpg';
import follower2 from '../../assets/images/follower/2.jpg';
import follower3 from '../../assets/images/follower/3.jpg';
import follower4 from '../../assets/images/follower/4.JPG';
import follower5 from '../../assets/images/follower/5.JPG';
import follower6 from '../../assets/images/follower/6.JPG';
import follower7 from '../../assets/images/follower/7.JPG';
import follower8 from '../../assets/images/follower/8.JPG';
import follower9 from '../../assets/images/follower/9.JPG';
import follower10 from '../../assets/images/follower/10.JPG';
import follower11 from '../../assets/images/follower/11.JPG';
import follower12 from '../../assets/images/follower/12.JPG';
import follower13 from '../../assets/images/follower/13.JPG';
import follower14 from '../../assets/images/follower/14.JPG';
import follower15 from '../../assets/images/follower/15.JPG';
import follower16 from '../../assets/images/follower/16.JPG';
import follower17 from '../../assets/images/follower/17.JPG';
import follower18 from '../../assets/images/follower/18.JPG';



const followerImages = [follower7, follower13, follower3, follower10, follower8, follower2];

const MAX_TRAILS = 20; // Max 20 images
const IMG_SIZE = 100;
const STICK_TIME = 1200; // ms before fade
const FADE_TIME = 500; // ms fade duration
const DIST_THRESHOLD = 80; // Minimum distance in px between images

const CursorTrail = ({ parentRef }) => {
  const [trail, setTrail] = React.useState([]); // {x, y, imgIdx, fading, id}
  const idRef = React.useRef(0);
  const lastPosRef = React.useRef(null);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parentRef.current) return;
      const rect = parentRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Only add if moved enough distance from last
      if (lastPosRef.current) {
        const dx = x - lastPosRef.current.x;
        const dy = y - lastPosRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < DIST_THRESHOLD) return;
      }
      lastPosRef.current = { x, y };
      const imgIdx = idRef.current % followerImages.length;
      const id = idRef.current++;
      setTrail((prev) => {
        const next = [...prev, { x, y, imgIdx, fading: false, id }];
        return next.length > MAX_TRAILS ? next.slice(next.length - MAX_TRAILS) : next;
      });
      // Start fade after stick time
      setTimeout(() => {
        setTrail((prev) => prev.map(t => t.id === id ? { ...t, fading: true } : t));
      }, STICK_TIME);
      // Remove after fade time
      setTimeout(() => {
        setTrail((prev) => prev.filter(t => t.id !== id));
      }, STICK_TIME + FADE_TIME);
    };
    const node = parentRef.current;
    if (node) {
      node.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (node) {
        node.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [parentRef]);

  return (
    <div style={{
      position: 'absolute',
      top: 0, left: 0, width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: 1,
      overflow: 'hidden'
    }}>
      {trail.map(({ x, y, imgIdx, fading, id }) => (
        <img
          key={id}
          src={followerImages[imgIdx]}
          alt=""
          style={{
            position: 'absolute',
            left: x - IMG_SIZE / 2,
            top: y - IMG_SIZE / 2,
            width: IMG_SIZE,
            height: IMG_SIZE,
            opacity: fading ? 0 : 1,
            transition: `opacity ${FADE_TIME}ms linear`,
            pointerEvents: 'none',
            filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.18))',
            zIndex: 1
          }}
        />
      ))}
    </div>
  );
};

const FadeInSection = ({ children }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    }, { threshold: 0.15 });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      className={`fade-in-section${isVisible ? ' is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

const About_1 = () => {
  const leftRef = useRef(null);
  return (
    <div className='about_1' style={{ position: 'relative', overflow: 'hidden' }}>
      <div className='quote'>
        <h2>
          My pathway to <em>thoughtful</em>, human-centered AI begins with <em>curiosity</em> and <em>constraint</em> — and a drive to <em>build things that last</em>.
        </h2>
      </div>
      <div className='about_1_content'>
        <div className='about_1_left' ref={leftRef} style={{ position: 'relative', overflow: 'hidden' }}>
          <CursorTrail parentRef={leftRef} />
          {/* Optional visual (e.g., icon, vertical nav, or decoration) */}
        </div>
        <div className='about_1_right'>
          <FadeInSection>
            <div className='about_content_1_title'>Systems Thinker</div>
            <div className='about_content_1_content'>
              Comfortable working across the stack — from <em>prompt engineering</em> to <em>deployment</em>. Focused on <em>optimization</em> and clarity in both code and design.
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className='about_content_2_title'>Human-Centered Technologist</div>
            <div className='about_content_2_content'>
              Whether conducting user interviews or prototyping onboarding flows, I prioritize <em>people-first design</em> — especially in AI systems where the stakes are high and the users often <em>overlooked</em>.
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className='about_content_3_title'>Startup-Minded</div>
            <div className='about_content_3_content'>
              I thrive in <em>fast-paced</em> environments where autonomy, ambiguity, and rapid iteration are the norm. My favorite projects are scrappy, meaningful, and always shipping.
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default About_1;
