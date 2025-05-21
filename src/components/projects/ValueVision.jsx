import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/ValueVision.css'
import valueVisionImg from '../../assets/images/vv.png';
import { useScrollFade } from '../../hooks/useScrollFade';

const ValueVision = () => {
    const [ref, style] = useScrollFade();
    return (
    <Fragment>
        <Link ref={ref} to="/value-vision" className="valuevision" style={style}>
            <div className="project_left">
                <div className="project_name">02 | Software Development</div>
                <div className="project_image">
                    <img src={valueVisionImg} alt="ValueVision project" />
                </div>
            </div>
            <div className="project_desc">
                <h2>ValueVision</h2>
                <p>Multimodal ML model for predicting real estate prices</p>
            </div>
        </Link>
    </Fragment>
    )
}

export default ValueVision