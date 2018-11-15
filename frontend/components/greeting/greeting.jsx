import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup-nav">
      <Link to="/login">Sell on Etsy</Link>
        &nbsp;&nbsp;
      <Link to="/signup">Register</Link>
        &nbsp;&nbsp;
      <Link className="login-button" to="/login">Sign in</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <Link to="api/products/new">Sell on Etsy</Link>
      <h2 className="header-you-dropdown">You</h2>
      <button className="header-logout-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
