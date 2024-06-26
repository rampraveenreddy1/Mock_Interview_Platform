import React from 'react';
import './Login.css'; // Import CSS file for styling

const UserLoginComponent = () => {
  return (
    <div className="login-container">
      <h2>User Login</h2>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserLoginComponent;
