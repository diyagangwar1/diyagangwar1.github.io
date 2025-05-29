import React, { Fragment } from 'react'
import '../../styles/Mimente.css'
import mimenteImg from '../../assets/images/hcd.png';
import { useScrollFade } from '../../hooks/useScrollFade';

const Mimente = () => {
    const [ref, style] = useScrollFade();
    return (
    <Fragment>
        <a
            ref={ref}
            href="https://diyagangwar.cargo.site/mimente-description"
            className="mimente"
            style={style}
            target="_blank"
            rel="noopener noreferrer"
        >
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
        </a>
    </Fragment>
    )
}

export default Mimente
