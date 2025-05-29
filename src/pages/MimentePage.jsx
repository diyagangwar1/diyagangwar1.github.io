import React, { Fragment, useRef } from 'react';
import MimenteHero from '../components/mimentepage/MimenteHero';
import MimenteContent from '../components/mimentepage/MimenteContent';
import '../styles/MimentePage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MimentePage = () => {
    const mimentePageRef = useRef(null);

    return (
        <Fragment>
            <div className="mimente-page">
                <Navbar />
                <MimenteHero />
                <MimenteContent />
                <Footer />
            </div>
        </Fragment>
    );
};

export default MimentePage; 