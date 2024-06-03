import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Navbar from './Navbar';
import women1Image from '../images/women1.jpg';
import women2Image from '../images/women2.jpg';
import women3Image from '../images/woo1.jpg';
import women4Image from '../images/women4.jpg';
import womenImage from '../images/wooomen.png';

const WomenComponent = () => {
    return (
        <>
        <Navbar />
        <div className="homepage">
            <div className="middle">
                <div className="des">
                    <div className="hi">HI,</div>
                    <div className="w">Welcome</div>
                    <div className="n">to MIAN G GARMENTS</div>
                    <div className="d">
                        {  <div class="d">Discover our curated selection of women's apparel, designed to empower and inspire confidence with every ensemble.</div>}
                    </div>
                    <Link to="/shop"><button>SHOP NOW</button></Link>
                </div>
                <div className="imag">
                    <img src={womenImage} alt="women" />
                </div>
            </div>

            <div className="dots">
                <Link to="/men"><div className="d1"></div></Link>
                <Link to="/women"><div className="d1"></div></Link>
                <Link to="/"><div className="d1"></div></Link>
            </div>

            <div className="collect_row">
                <div className="itm1" style={{ backgroundImage: `url(${women1Image})` }}><div className="content">Blue Printed</div></div>
                <div className="itm2" style={{ backgroundImage: `url(${women2Image})` }}><div className="content">Rounded</div></div>
                <div className="itm3" style={{ backgroundImage: `url(${women3Image})` }}><div className="content">White</div></div>
                <div className="itm4" style={{ backgroundImage: `url(${women4Image})` }}><div className="content">Long Coat</div></div>
            </div>
        </div>
        </>
    );
};

export default WomenComponent;
