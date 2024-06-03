import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import './Navbar.css'
import Navbar from './Navbar';
import kidS from '../images/kidS.png';
// import suit from '../images/suit.jpg';
// import shirts from '../images/shirts.jpg';
// import pants from '../images/pants.jpg';
// import kidss from '../images/kidss.jpg';

const HomePage = () => {
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
            Discover our curated selection of women's apparel, designed to empower and inspire confidence with every ensemble.
          </div>
          <Link to="/shop"><button>SHOP NOW</button></Link>
        </div>
        <div className="imag">
          <img src={kidS} alt="Kids" />
        </div>
      </div>

      <div className="dots">
        <Link to="/men"><div className="d1"></div></Link>
        <Link to="/women"><div className="d1"></div></Link>
        <Link to="/"><div className="d1"></div></Link>
      </div>

      <div className="collect_row">
        <div className="itm1" style={{ backgroundImage: `url('https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400')` }}>
          <div className="content">Summers</div>
        </div>
        <div className="itm2" style={{ backgroundImage: `url('https://images.pexels.com/photos/2995309/pexels-photo-2995309.jpeg?auto=compress&cs=tinysrgb&w=400')` }}>
          <div className="content">Frocks</div>
        </div>
        <div className="itm3" style={{ backgroundImage: `url('https://images.pexels.com/photos/2533323/pexels-photo-2533323.jpeg?auto=compress&cs=tinysrgb&w=400')` }}>
          <div className="content">Fancy</div>
        </div>
        <div className="itm4" style={{ backgroundImage: `url('https://edenrobe.com/cdn/shop/products/23_B_BoysKurtaShalwar_EBTKS23-3893_1_960x_crop_center.jpg?v=1701486826')` }}>
          <div className="content">Kurta Shalwar</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
