import React from 'react'
import '../../styles/About_Main.css'
import diyaImg from '../../assets/images/diya.png'

const About_Main = () => {
  return (
    <div className='about_main_container' id='about_main'>
      <div className='about_main_left'>
        <h2>About Me</h2>
        <p> I'm a builder, tinkerer, and systems thinker—currently a junior at Harvey Mudd College 
          studying Computer Science with minors in Human-Centered Design and Economics. My work lives 
          at the intersection of AI, hardware, and human intuition: Ive deployed real-time face 
          detection on solar-powered microcontrollers (no batteries, no cloud) and designed NLP-powered
          tools to untangle messy workflows in high-stakes environments. Whether Im optimizing ML
          inference on the edge or prototyping with users in the loop, I care about one thing: building
          resilient, impactful systems that actually work in the wild. Fast-moving teams and bold ideas
          are my favorite kind of chaos.
        </p>
      </div>
      <div className='about_main_right'>
        <img src={diyaImg} alt="Diya" className="about_main_img" />
      </div>
    </div>
  )
}

export default About_Main