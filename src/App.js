import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MenComponent from './components/MenComponent';
import WomenComponent from './components/WomenComponent';
import ShopPage from './components/ShopPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'; // Import SignUp component
import ShoppingCart from './components/ShoppingCart';
import GarmentShop from './components/GarmentShop';
import ContactUs from './components/ContactUs';
import BrandComponent from './components/BrandComponent';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePageWithNavbar />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/men" element={<MenComponent />} />
                <Route path="/women" element={<WomenComponent />} />
                <Route path="/collection" element={<GarmentShop />} />
                <Route path="/brand" element={<BrandComponent />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} /> {/* Updated route for SignUp */}
                <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
        </Router>
    );
};







// Navbar component for pages that require it
const Navbar = () => (
    <div className="navbar">
        {/* Navbar content */}
    </div>
);

// Wrapper component for the homepage that includes the Navbar
const HomePageWithNavbar = () => (
    <>
        <Navbar />
        <HomePage />
    </>
);

export default App;
