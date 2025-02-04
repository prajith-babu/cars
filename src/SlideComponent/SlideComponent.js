import React, { useEffect, useRef } from 'react';
import './SlideComponent.css';
import { slideComponentConstants } from '../Constants/Constants';
const SlideInComponent = () => {
    const imageRef = useRef(null);

    const handleScroll = () => {
        const rect = imageRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            imageRef.current.classList.add('slide-in');
        } else {
            imageRef.current.classList.remove('slide-in');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container">
            <div className="image-container" ref={imageRef}>
                <img src="https://www.pngmart.com/files/21/Red-Tesla-Car-PNG.png" alt="Description" width="100%" />
            </div>
            <div className="slideIn-description">
                <h2 className='slideIn-heading'>{slideComponentConstants.slideTitle}</h2>
                <p className='slideIn-paragraph'>
                    {slideComponentConstants.slideDescription}
                </p>
            </div>
        </div>
    );
};

export default SlideInComponent;
