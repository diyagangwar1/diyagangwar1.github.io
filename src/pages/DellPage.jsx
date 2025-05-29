import React, {Fragment, useRef} from 'react';
import DellHero from '../components/dellpage/DellHero';
import DellContent from '../components/dellpage/DellContent';
import '../styles/DellPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DellPage = () => {
    const dellPageRef = useRef(null);

    return (
        <Fragment>
            <div className="dell-page">
                <Navbar />
                <DellHero />
                <DellContent />
                <Footer />
            </div>
        </Fragment>
    )
};

export default DellPage