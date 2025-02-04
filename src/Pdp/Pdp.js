import React, { useEffect, useState } from 'react';
import './Pdp.css';
import { pdpPageConstants } from '../Constants/Constants';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PDP = () => {
  
    const [showPopup, setShowPopup] = useState(false);
    const selectedData=useSelector((state)=>state.data)
    const navigate=useNavigate()

    useEffect(()=>{
        if(selectedData.length===0){
                 navigate("/")
        }
    },[])

    const handleAddToCart = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className="pdp">
            <div className="product-details">
                <img src={selectedData.image} alt={selectedData.name} className="details-image"/>
                <div className="details">
                    <h1>{selectedData.make} {selectedData.model}</h1>
                    <p className='product-desc'>{pdpPageConstants.price}</p>
                    <p className='product-price'>${selectedData.price}</p>
                    <p className='product-desc'>{pdpPageConstants.features}</p>
                    <p>{selectedData.features}</p>
                    <p className='product-desc'>{pdpPageConstants.engineSpec}</p>
                    <p>{selectedData.engine}</p>
                    <p className='product-desc'>{pdpPageConstants.transmission}</p>
                    <p>{selectedData.transmission}</p>
                    <p className='product-desc'>{pdpPageConstants.fuelType}</p>
                    <p>{selectedData.fuelType}</p>
                    <p className='product-desc'>{pdpPageConstants.horsepower}</p>
                    <p>{selectedData.horsepower}</p>
                    <div className='product-buttons'>
                        <button className='cart-button' onClick={handleAddToCart}>Add to Cart</button>
                        <button className='back-button' onClick={handleGoBack}>Go Back</button>
                    </div>
                        {showPopup && (
                        <div className="popup">
                            <div className="popup-content">
                                <p>Added to Cart</p>
                                <button onClick={handleClosePopup}>OK</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default PDP;
