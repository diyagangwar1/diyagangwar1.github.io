import React, { Fragment, useRef } from 'react';
import TinyMLHero from '../components/tinymlpage/TinyMLHero';
import TinyMLContent from '../components/tinymlpage/TinyMLContent';
import '../styles/TinyMLPage.css';
import Navbar from '../components/Navbar';

const TinyMLPage = () => {
    const tinyMLPageRef = useRef(null);

    return (
        <Fragment>
            <div className="tinyml-page">
                <Navbar />
                <TinyMLHero />
                <TinyMLContent />
            </div>
        </Fragment>
    );
};

export default TinyMLPage; 