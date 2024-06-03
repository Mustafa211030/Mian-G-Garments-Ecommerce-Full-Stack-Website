import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import SignUpImage from '../images/SignUpImage.jpg'; // Replace with your image
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signUpMessage, setSignUpMessage] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            // Send signup data to backend server
            const response = await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });

            // Check if signup was successful
            if (response.data.message === 'User created successfully') {
                // Update signup message state
                setSignUpMessage('Account created successfully!');

                // Clear input fields after successful signup
                setUsername('');
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="bod">
            <div className="signup-container">
                <div className="signup-form-container">
                    <h2>Sign Up</h2>
                    {signUpMessage && <p className="signup-message">{signUpMessage}</p>}
                    <form onSubmit={handleSignUp}>
                        <div className="input-container">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
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
                        <button type="submit" className="btn create-btn">Create Account</button>
                    </form>
                    <Link to="/signin"><button className="btn login-btn">Login</button></Link>
                </div>
                <div className="signup-image-container">
                    <img src={SignUpImage} alt="Sign Up" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
