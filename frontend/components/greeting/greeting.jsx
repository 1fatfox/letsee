import React from 'react';
import { Link } from 'react-router-dom';
import YouDropdown from './user_dropdown_container';
import ShopContainer from '../shop/create_shop_container';
import UpdateProduct from '../product/update_product_container';
import MyShopContainer from '../shop/my_shop_container';


const Greeting = ({ currentUser, logout, openModal, demoSignUp, shop }) => {
  const sessionLinks = () => (
    <div>
      <nav className="login-signup-nav">
        <Link className='letsee_logo' to="/">letsee</Link>
        <div className='nav-right'>
          <div className="first-two-logins">
            <button className="demo-nav-button" onClick={() => demoSignUp()}>Demo</button>
            <button  onClick={() => openModal('login')}>Sell on Etsy</button>
            <button onClick={() => openModal('signup')}>Register</button>
          </div>
          <div className="sign-in-login">
            <button  onClick={() => openModal('login')}>Sign in</button>
          </div>
        </div>
      </nav>
      <h2 className= "etsy-banner">
        <ul>
          <li className="etsy-banner-span">If it’s handcrafted, vintage, custom, or unique, it's on letsee. </li>
        </ul>
      </h2>
    </div>

  );
  let routeToShopProduct;
  if (shop !== null) {
    routeToShopProduct = <Link className="sell-on-etsy" to="/products/new">Sell on Etsy</Link>
  } else {
    routeToShopProduct = <Link className="sell-on-etsy" to="/shops/new">Sell on Etsy</Link>;
  }
  const personalGreeting = () => (
    <div>
      <hgroup className="header-group">
        <Link to="/" className='letsee_logo'>letsee </Link>
        <div className="header-right">
          {routeToShopProduct}
          <div className="shop-button-greeting">
            <img className="shop-button-image" src={window.ShopURL}></img>
            <div className="shop-button-div"><Link to="/users/:user_id/shops/:shopId">Your shop</Link></div>
          </div>
          <div className="you-dropdown-greeting">
            <img className="you-dropdown-image" src={window.YouDropdownUrl}></img>
            <div className="you-dropdown"><YouDropdown/></div>
          </div>
        </div>
      </hgroup>
      <h2 className= "etsy-banner" >
        <ul>
          <li className="etsy-banner-span">If it’s handcrafted, vintage, custom, or unique, it's on letsee. </li>
        </ul>
      </h2>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;

// <div className="shop-dropdown-greeting">
//   <ShopDropdown/>
// </div>
// <img className="shop-dropdown-image" src={window.YouDropdownUrl}></img>
