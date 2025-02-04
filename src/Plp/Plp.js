import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Plp.css';
import { plpPageConstants } from '../Constants/Constants';
import { useDispatch } from 'react-redux';
import { selectedData } from '../redux/action';

const PLP = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const navigate = useNavigate();
    const dispatch=useDispatch();
   

    useEffect(() => {
        // Fetching data from the API
        fetch('http://localhost:3000/data')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 1000); 

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const handleCardClick = (id) => {

       const setVal= products.find((value)=>{
            return value.id===id
        })
        navigate(`/product/${id}`);
        dispatch(selectedData(setVal))
    };
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.model.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );

    return (
        <div className="plp">
            <div className='plp-headings'>
                <h2 className='plp-mainHeading'>{plpPageConstants.title}</h2>
                <input
                    type="text"
                    placeholder={plpPageConstants.searchPlaceholder}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="plp-searchbar"
                />
            </div>
            <div className="product-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="product-card" onClick={() => handleCardClick(product.id)}>
                            <img src={product.image} alt={product.model} className="product-image" />
                            <h3>{product.model}</h3>
                            <p className='product-amount'>${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p className="no-items-found">{plpPageConstants.noItemsFound}</p>
                )}
            </div>
        </div>
    );
}

export default PLP;
