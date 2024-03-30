// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Mock Interview</h1>
      <div className="login-buttons">
        <Link to="/user-login">
          <button className="login-button">Login as User</button>
        </Link>
        <Link to="/interviewer-login">
          <button className="login-button">Login as Interviewer</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
