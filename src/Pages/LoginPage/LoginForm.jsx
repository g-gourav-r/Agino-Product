import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import "../../assets/css/RegistrationForm.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!username || !password) {
      setError('Both fields are required');
      return;
    }

    setError('');
    // Handle successful form submission here
    console.log('Form submitted successfully');
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <FaLock className='icon'/>
        </div>  
        {error && <div className="error-message text-center pt-3">{error}</div>}
        <div className="remember-forgot py-3">
          <a href="#">Forgot Password?</a>
        </div>         
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="/signup">Register</a></p>    
        </div> 
      </form>
    </div>
  );
};
