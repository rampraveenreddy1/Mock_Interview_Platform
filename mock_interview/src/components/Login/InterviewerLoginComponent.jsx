import React from 'react';
import './Login.css'; // Import CSS file for styling

const InterviewerLoginComponent = () => {
  return (
    <div className="login-container">
      <h2>Interviewer Login</h2>
      <form className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default InterviewerLoginComponent;
