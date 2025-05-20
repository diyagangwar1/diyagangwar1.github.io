import React, { Fragment, forwardRef } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/TinyML.css'
import tinyMLImg from '../../assets/images/esp32.png';
import { useScrollFade } from '../../hooks/useScrollFade';

const TinyML = forwardRef((props, ref) => {
    const [localRef, style] = useScrollFade();
    // Use the passed ref for scrolling, and localRef for animation
    const combinedRef = node => {
        if (ref) {
            if (typeof ref === 'function') ref(node);
            else ref.current = node;
        }
        localRef.current = node;
    };
    return (
    <Fragment>
        <Link ref={combinedRef} to="/tinyml" className="tinyml" style={style}>
            <div className="project_left">
                <div className="project_name">01 | Undergraduate Research</div>
                <div className="project_image">
                    <img src={tinyMLImg} alt="TinyML project" />
                </div>
            </div>
            <div className="project_desc">
                <h2>Intermittent TinyML on Solar-Powered ESP32s</h2>
                <p>Solar-powered face detection on ultra-low-power edge devices</p>
            </div>
        </Link>
    </Fragment>
    )
});

export default TinyML
