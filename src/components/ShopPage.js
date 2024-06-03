import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './ShopPage.css';

const ShopPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = async (productId) => {
        try {
            const userId = localStorage.getItem('userId'); // Assume user ID is stored in local storage
            await axios.post('http://localhost:5000/api/cart/add', { userId, productId });
            alert('Product added to cart');
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <div className="shop-page">
            <Navbar />
            <div className="shop-content">
                <h1>Collections</h1>
                <div className="product-container">
                    {products.map((product) => (
                        <div key={product._id} className="product">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-details">
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p>${product.price.toFixed(2)}</p>
                                <button className="buy-button" onClick={() => handleAddToCart(product._id)}>
                                    Buy this
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
