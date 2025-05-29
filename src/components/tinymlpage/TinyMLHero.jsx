import React from 'react';
import '../../styles/TinyMLHero.css';
import tinyMLImg from '../../assets/images/esp32.png';

const TinyMLHero = () => {
    return (
        <div className='tinyml-hero'>
            <div className='tinyml-hero-title'>Intermittent TinyML</div>
            <div className='tinyml-hero-desc'>
                Solar-powered face detection on ultra-low-power edge devices, enabling sustainable IoT applications in resource-constrained environments
            </div>
            {/* Image removed */}
        </div>
    );
};

export default TinyMLHero; 