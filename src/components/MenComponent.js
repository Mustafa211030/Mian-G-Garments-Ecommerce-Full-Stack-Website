import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Navbar from './Navbar';
// import kidS from '../images/kidS.png';
// import suit from '../images/suit.jpg';
// import shirts from '../images/shirts.jpg';
// import pants from '../images/pants.jpg';
// import kidss from '../images/kidss.jpg';
import menImage from '../images/men.png'; // Adjust the import path

const MenComponent = () => {
    return (
      <>  <Navbar />
        <div className="homepage">
        <div className="middle">
            <div className="des">
                <div className="hi">HI,</div>
                <div className="w">Welcome</div>
                <div className="n">to MIAN G GARMENTS</div>
                <div className="d">where style meets comfort. From casual essentials to elegant evening wear, we've got everything you need to elevate your wardrobe.</div>
                <button>SHOP NOW</button>
            </div>
            <div className="imag">
                <img src={menImage} alt="men" />
            </div>
        </div>

        <div className="dots">
        <Link to="/men"><div className="d1"></div></Link>
        <Link to="/women"><div className="d1"></div></Link>
        <Link to="./"><div className="d1"></div></Link>
      </div>

      <div className="collect_row">
    <div className="itm1" style={{ backgroundImage: `url('https://cdn.suitdirect.co.uk/upload/siteimages/medium/ar23109mj_140_b.jpg')` }}>
        <div className="content">Suits</div>
    </div>
    <div className="itm2" style={{ backgroundImage: `url('https://cdn.suitdirect.co.uk/upload/siteimages/medium/0078851_150_a.jpg')` }}>
        <div className="content">Casual</div>
    </div>
    <div className="itm3" style={{ backgroundImage: `url('https://cdn.suitdirect.co.uk/upload/siteimages/medium/0078851_010_a.jpg')` }}>
        <div className="content">White</div>
    </div>
    <div className="itm4" style={{ backgroundImage: `url('https://cdn.suitdirect.co.uk/upload/siteimages/medium/0078769_561_a.jpg')` }}>
        <div className="content">T Shirt</div>
    </div>
</div>

        </div>
        </>
    );
};

export default MenComponent;
