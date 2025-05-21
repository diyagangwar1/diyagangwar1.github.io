import React, { Fragment, useRef } from 'react';
import MimenteHero from '../components/mimentepage/MimenteHero';
import MimenteContent from '../components/mimentepage/MimenteContent';
import '../styles/MimentePage.css';
import Navbar from '../components/Navbar';

const MimentePage = () => {
    const mimentePageRef = useRef(null);

    return (
        <Fragment>
            <div className="mimente-page">
                <Navbar />
                <MimenteHero />
                <MimenteContent />
            </div>
        </Fragment>
    );
};

export default MimentePage; 