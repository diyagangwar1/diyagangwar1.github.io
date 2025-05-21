import React from 'react';
import '../../styles/MimenteHero.css';
import mimenteImg from '../../assets/images/hcd.png';

const MimenteHero = () => {
    return (
        <div className='mimente-hero'>
            <div className='mimente-hero-title'>Mimente</div>
            <div className='mimente-hero-desc'>
                A culturally aware school-based mental health system designed to support Latinx students through accessible, community-driven mental health resources
            </div>
            <div className='mimente-hero-image'>
                <img src={mimenteImg} alt="Mimente Project" />
            </div>
        </div>
    );
};

export default MimenteHero; 