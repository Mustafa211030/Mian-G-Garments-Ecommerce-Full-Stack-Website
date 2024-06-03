import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import SignInImage from '../images/SIGNPIC.jpg'; // Replace with your image

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signin', { email, password });
            localStorage.setItem('token', response.data.token);
            setSuccessMessage('User logged in successfully.');
            setTimeout(() => {
                navigate('/');
            }, 3000); // Redirect to home page after 3 seconds
        } catch (error) {
            setError('Invalid email or password. Please try again.');
            console.error('Error signing in:', error);
        }
    };

    return (
        <div className="bod">
           
            <div className="body">
            <h1>Welcome to Mian G</h1>
            <h3>Make yourself a Family Member</h3>
                <div className="signin-container">
                    <div className="signin-image-container">
                        <img src={SignInImage} alt="Sign In" />
                    </div>
                    <div className="signin-form-container">
                        <h2>Sign In</h2>
                        {error && <p className="error-message">{error}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        <form onSubmit={handleSignIn}>
                            <div className="input-container">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-container">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn signin-btn">Sign In</button>
                        </form>
                        <p>Don't have an account? <Link to="/signup">Create ONE</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
