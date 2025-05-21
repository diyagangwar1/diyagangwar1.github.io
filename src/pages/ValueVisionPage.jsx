import React, { Fragment, useRef } from 'react';
import ValueVisionHero from '../components/valuevisionpage/ValueVisionHero';
import ValueVisionContent from '../components/valuevisionpage/ValueVisionContent';
import '../styles/ValueVisionPage.css';
import Navbar from '../components/Navbar';

const ValueVisionPage = () => {
    const valueVisionPageRef = useRef(null);

    return (
        <Fragment>
            <div className="valuevision-page">
                <Navbar />
                <ValueVisionHero />
                <ValueVisionContent />
            </div>
        </Fragment>
    );
};

export default ValueVisionPage; 