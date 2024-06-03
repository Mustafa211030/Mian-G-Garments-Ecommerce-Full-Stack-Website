import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShoppingCart.css';
import Navbar from './Navbar';

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      // Dummy data for three items
      const dummyCart = [
        {
          productId: 1,
          product: {
            name: "SEA-WEED-BLENDED-KURTA SHALWAR",
            description: "(KSRS24-016)",
            price: 19.99,
            image: "https://cdn.shopify.com/s/files/1/0464/1731/3955/files/KSRS24-016_1_83badb80-4b98-4179-888a-e8b2ca814dbd_360x.jpg?v=1713521502"
          },
          quantity: 1
        },
        {
          productId: 2,
          product: {
            name: "ELEPHANT-BLENDED-KURTA SHALWAR",
            description: "(KSRS24-033)",
            price: 29.99,
            image: "https://cdn.shopify.com/s/files/1/0464/1731/3955/files/KSRS24-033_1_73e2931a-43ea-4f91-880d-771e517e05aa_360x.jpg?v=1713521587"
          },
          quantity: 2
        },
        {
          productId: 3,
          product: {
            name: "BERMUDA",
            description: " 2 PC (SST232P39)",
            price: 39.99,
            image: "https://bonanzasatrangi.com/cdn/shop/files/0100_SST232P39-052A8826_8373668c-e0a2-4613-8099-278685cc442c_540x.jpg?v=1716547874"
          },
          quantity: 3
        }
      ];

      setCart(dummyCart);
    };

    fetchCart();
  }, []);

  const handleQuantityChange = (productId, quantity) => {
    const updatedCart = cart.map(item => {
      if (item.productId === productId) {
        return {
          ...item,
          quantity: quantity
        };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.productId !== productId);
    setCart(updatedCart);
  };

  return (
    <>
    
    <Navbar />
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.productId}>
            <img src={item.product.image} alt={item.product.name} />
            <div className="product-info">
              <h2>{item.product.name}</h2>
              <p>Description: {item.product.description}</p>
              <p>Price: ${item.product.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.productId, e.target.value)}
              />
              <button onClick={() => handleRemoveFromCart(item.productId)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)}</p>
    </div>  </>
  );
}

export default ShoppingCart;
