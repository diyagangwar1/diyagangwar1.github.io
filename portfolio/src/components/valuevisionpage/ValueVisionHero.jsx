import React from 'react';
import '../../styles/ValueVisionHero.css';
import valuevisionImg from '../../assets/images/vv.png';

const ValueVisionHero = () => {
    return (
        <div className='valuevision-hero'>
            <div className='valuevision-hero-title'>ValueVision</div>
            <div className='valuevision-hero-desc'>
                A platform that helps investors make data-driven decisions by analyzing company values and ESG metrics
            </div>
            <div className='valuevision-hero-image'>
                <img src="/valuevision-hero.png" alt="ValueVision Platform" />
            </div>
        </div>
    );
};

export default ValueVisionHero; 