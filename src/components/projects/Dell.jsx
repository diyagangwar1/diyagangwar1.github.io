import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Dell.css'
import dellImg from '../../assets/images/dell.png';
import { useScrollFade } from '../../hooks/useScrollFade';

const Dell = () => {
    const [ref, style] = useScrollFade();
    return (
    <Fragment>
        <Link ref={ref} to="/dell" className="dell" style={style}>
            <div className="project_left">
                <div className="project_name">03 | Software Engineering Intern</div>
                <div className="project_image">
                    <img src={dellImg} alt="Dell project" />
                </div>
            </div>
            <div className="project_desc">
                <h2>Security Automation at Dell Technologies</h2>
                <p>AI assistant for internal security compliance and workflow ops</p>
            </div>
        </Link>
    </Fragment>
    )
}

export default Dell
