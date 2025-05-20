import React, { Fragment, useRef, useEffect, useState } from 'react'
import Navbar from '../components/NavBar'
import ValueVision from '../components/projects/ValueVision'
import '../styles/Home.css'
import Hero from '../components/Hero'
import TinyML from '../components/projects/TinyML'
import Dell from '../components/projects/Dell'
import Mimente from '../components/projects/Mimente'
import ScrollProjects from '../components/ScrollProjects'
import About from '../components/about/About_1'
import Carousel from '../components/about/more_about'
import Experience from '../components/about/Experience'
import Skills from '../components/about/TechnicalSkills'
import About_Main from '../components/about/About_main'

const DESKTOP_MIN_WIDTH = 0.6 * 1440; // 60% of a typical desktop width (1440px)

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= DESKTOP_MIN_WIDTH);
  const firstProjectRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_MIN_WIDTH);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleWorkClick = () => {
    const nav = document.querySelector('.navbar');
    const navHeight = nav ? nav.offsetHeight : 0;
    const project = firstProjectRef.current;
    if (project) {
      const top = project.getBoundingClientRect().top + window.scrollY - navHeight - 16; // 16px extra spacing
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  if (!isDesktop) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#000',
        color: '#aaa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Hero />
        <div style={{
          marginTop: '3rem',
          fontSize: '1.1rem',
          letterSpacing: '0.08em',
          color: '#aaa',
          textAlign: 'center',
          textTransform: 'uppercase',
          marginBottom: '5rem',
        }}>
          VIEW DESKTOP MODE FOR FULL VERSION
        </div>
      </div>
    );
  }

  return (
    <Fragment>
      <Navbar onWorkClick={handleWorkClick} />
      <div className='home'>
        <Hero />
        <ScrollProjects ref={firstProjectRef} id='first_project' />
        <TinyML />
        <ValueVision />
        <Dell />
        <Mimente />
        <About_Main />
        <Skills />
        <About />
        <Experience />
        <Carousel />
      </div>
    </Fragment>
  )
}

export default Home