import React from 'react';
import './LandingPage.css';
import BackgroundImage from '../Assets/BackgroundImage.jpg'
import { landingPageConstants } from '../Constants/Constants';
import SlideInComponent from '../SlideComponent/SlideComponent';
const LandingPage = () => {
    return (
        <>
            <div className="backgroundPoster">
                <div className='mainPoster'>
                    <img className='landing-page' src={BackgroundImage} alt="Logo" />  
                </div>
                    
                <div className='posterWritings'>
                    <p>{landingPageConstants.heroCaption}</p>
                </div>              
            </div>
            <SlideInComponent/>
        </>    
    );
}

export default LandingPage;