import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup-nav">
      <h1 className='letsee_logo'>letsee</h1>
      <button onClick={() => openModal('login')}>Sell on Etsy</button>
        &nbsp;&nbsp;
      <button onClick={() => openModal('signup')}>Register</button>
        &nbsp;&nbsp;
      <button onClick={() => openModal('login')}>Sign in</button>
    </nav>
  );
  const personalGreeting = () => (
      <hgroup className="header-group">
        <h1 className='letsee_logo'>letsee</h1>
        <nav className="header-group-logged-in">
          <Link to="api/products/new">Sell on Etsy</Link>
          <h2 className="header-you-dropdown">You</h2>
          <button className="header-logout-button" onClick={logout}>Log Out</button>
        </nav>
      </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
