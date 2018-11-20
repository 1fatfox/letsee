import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './user_dropdown_container';


const Greeting = ({ currentUser, logout, openModal, demoSignUp }) => {
  const sessionLinks = () => (
    <div>
      <nav className="login-signup-nav">
        <h1 className='letsee_logo'>letsee</h1>
        <div className='nav-right'>
          <div className="first-two-logins">
            <button className="demo-login" onClick={() => demoSignUp()}>Demo</button>
            <button  onClick={() => openModal('login')}>Sell on Etsy</button>
            <button onClick={() => openModal('signup')}>Register</button>
          </div>
          <div className="sign-in-login">
            <button  onClick={() => openModal('login')}>Sign in</button>
          </div>
        </div>
      </nav>
      <h2 className= "etsy-banner">
      If it’s handcrafted, vintage, custom, or unique, it’s on Etsy.
      </h2>
    </div>

  );
  const personalGreeting = () => (
    <div>
      <hgroup className="header-group">
        <Link to="/" className='letsee_logo'>letsee </Link>
        <div className="header-right">
          <Link to="products/new">Sell on Etsy</Link>
          <div className="dropdown">
            <img className="you-dropdown-image" src={window.YouDropdownUrl}></img>
            <Dropdown/>
          </div>
        </div>
      </hgroup>
      <h2 className= "etsy-banner">
        If it’s handcrafted, vintage, custom, or unique, it’s on Etsy.
      </h2>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
