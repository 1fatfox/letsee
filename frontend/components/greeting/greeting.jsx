import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './user_dropdown_container';


const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup-nav">
      <h1 className='letsee_logo'>letsee</h1>
      <div className='nav-right'>
        <div className="first-two-logins">
          <button  onClick={() => openModal('login')}>Sell on Etsy</button>
          <button onClick={() => openModal('signup')}>Register</button>
        </div>
        <div className="sign-in-login">
          <button  onClick={() => openModal('login')}>Sign in</button>
        </div>
      </div>
    </nav>
  );
  const personalGreeting = () => (
      <hgroup className="header-group">
        <h1 className='letsee_logo'>letsee</h1>
        <div className="header-right">
          <Link to="products/new">Sell on Etsy</Link>
          <div className="dropdown"><Dropdown/></div>
      </div>
      </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
