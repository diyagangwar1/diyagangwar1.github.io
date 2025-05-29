import React from 'react'
import '../../styles/DellHero.css'
import dellImg from '../../assets/images/dell.png';

const DellHero = () => {
    return (
        <div className='dell-hero'>
            <div className='dell-hero-title'>Security Automation</div>
            <div className='dell-hero-desc'>Built an internal AI assistant using Hugging Face, LLaMa.cpp, and Qdrant to automate security compliance queries and streamline operational workflows at scale.</div>
            <div className='dell-hero-image'>
                <img src={dellImg} alt="Dell project" />
            </div>
        </div>
    )
}
  
export default DellHero

  


