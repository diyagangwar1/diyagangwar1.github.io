import React, { Fragment, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import '../styles/NavBar.css'

const Navbar = ({ onWorkClick }) => {
    const [copied, setCopied] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleWorkClick = () => {
        if (location.pathname === '/') {
            const firstProject = document.getElementById('first_project');
            const nav = document.querySelector('.navbar');
            const navHeight = nav ? nav.offsetHeight : 0;
            if (firstProject) {
                const top = firstProject.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const firstProject = document.getElementById('first_project');
                const nav = document.querySelector('.navbar');
                const navHeight = nav ? nav.offsetHeight : 0;
                if (firstProject) {
                    const top = firstProject.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }, 300);
        }
    };

    const handleAboutClick = () => {
        if (location.pathname === '/') {
            const aboutMain = document.getElementById('about_main');
            if (aboutMain) {
                const nav = document.querySelector('.navbar');
                const navHeight = nav ? nav.offsetHeight : 0;
                const top = aboutMain.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const aboutMain = document.getElementById('about_main');
                const nav = document.querySelector('.navbar');
                const navHeight = nav ? nav.offsetHeight : 0;
                if (aboutMain) {
                    const top = aboutMain.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }, 300);
        }
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('dgangwar@g.hmc.edu');
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const handleNameClick = () => {
        if (location.pathname === '/') {
            const hero = document.getElementById('hero');
            const nav = document.querySelector('.navbar');
            const navHeight = nav ? nav.offsetHeight : 0;
            if (hero) {
                const top = hero.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const hero = document.getElementById('hero');
                const nav = document.querySelector('.navbar');
                const navHeight = nav ? nav.offsetHeight : 0;
                if (hero) {
                    const top = hero.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }, 300);
        }
    };

    return (
    <Fragment>
        <nav className='navbar'>
            <div className="navbar_name" onClick={handleNameClick} style={{ cursor: 'pointer', userSelect: 'none' }}>Diya Gangwar</div>
            <div className="navbar_links">
                <a className='navbar_work' onClick={handleWorkClick} style={{ cursor: 'pointer' }}>Work</a>
                <a className='navbar_about' onClick={handleAboutClick} style={{ cursor: 'pointer' }}>About</a>
            </div>
            <div className="navbar_actions">
                <button className="navbar_contact_btn" onClick={handleCopyEmail}>
                    {copied ? 'Copied' : 'Contact'}
                </button>
                <a className="navbar_linkedin" href="https://www.linkedin.com/in/diya-gangwar-a24274208" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </nav>
    </Fragment>
    )
}

export default Navbar