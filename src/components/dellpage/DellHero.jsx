import React from 'react'
import '../../styles/DellHero.css'
import dellImg from '../../assets/images/dell.png';

const DellHero = () => {
    return (
        <div className='dell-hero'>
            <div className='dell-hero-title'>Security Automation</div>
            <div className='dell-hero-desc'>Focused on streamlining compliance workflows using LLMs, vector search, and internal tooling across Dell’s Infrastructure Solutions Group.</div>
            <div className='dell-hero-image'>
                <img src={dellImg} alt="Dell project" />
            </div>
        </div>
    )
}
  
export default DellHero

  


