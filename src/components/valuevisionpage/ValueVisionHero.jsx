import React from 'react';
import '../../styles/ValueVisionHero.css';
import valuevisionImg from '../../assets/images/vv.png';

const ValueVisionHero = () => {
    return (
        <div className='valuevision-hero'>
            <div className='valuevision-hero-title'>ValueVision</div>
            <div className='valuevision-hero-desc'>
            Multimodal Property Valuation with Machine Learning: Text, Vision, and Structured Data Fusion
            </div>
            <div className='valuevision-hero-image'>
                <img src="/valuevision-hero.png" alt="ValueVision Platform" />
            </div>
        </div>
    );
};

export default ValueVisionHero; 