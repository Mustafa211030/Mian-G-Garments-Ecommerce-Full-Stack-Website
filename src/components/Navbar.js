import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <span>Mian G</span>
                <span>Garments</span>
            </div>

            <div className="nav">
                <Link to="/" style={{ borderBottom: '3px solid purple' }}>HOME</Link>
                <Link to="/shop">SHOP</Link>
                <Link to="/collection">COLLECTION</Link>
                <Link to="/brand">BRAND</Link>
                <Link to="/contact">CONTACT</Link>
            </div>

            <div className="rght">
                <div className="btn">
                    <Link to="/signin"><button>Sign In</button></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                </div>
                <div className="cart">
                    <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
