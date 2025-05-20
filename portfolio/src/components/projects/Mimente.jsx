import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Mimente.css'
import mimenteImg from '../../assets/images/hcd.png';
import { useScrollFade } from '../../hooks/useScrollFade';

const Mimente = () => {
    const [ref, style] = useScrollFade();
    return (
    <Fragment>
        <Link ref={ref} to="/mimente" className="mimente" style={style}>
            <div className="project_left">
                <div className="project_name">04 | Human-Centered Design</div>
                <div className="project_image">
                    <img src={mimenteImg} alt="Mimente project" />
                </div>
            </div>
            <div className="project_desc">
                <h2>Mimente</h2>
                <p>Culturally aware school-based mental health system for Latinx students.</p>
            </div>
        </Link>
    </Fragment>
    )
}

export default Mimente
