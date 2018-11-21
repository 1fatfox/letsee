import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRoute } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import ProductIndexContainer from './product/product_index_container';
import LoginFormContainer from './session/login_form_container';
import CreateShopContainer from './shop/create_shop_container';
import CreateProductContainer from './product/create_product_container';
import ShopShowContainer from './shop/shop_show_container';
import MyShopContainer from './shop/my_shop_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';


const App = () => (
  <div>
    <Modal />
    <header>
    <GreetingContainer />
    </header>
    <div className="body">
      <Route exact path="/" component={ProductIndexContainer} />
    </div>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/products/new" component={CreateProductContainer} />
    <Switch>
      <ProtectedRoute path="/shops/new" component={CreateShopContainer} />
      <Route path="/shops/:shopId" component={ShopShowContainer} />
      <ProtectedRoute path="/users/:user_id/shops/:shopId" component={MyShopContainer} />
    </Switch>
  </div>
);

export default App;
