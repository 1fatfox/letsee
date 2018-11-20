import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRoute } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import ProductIndexContainer from './product/product_index_container';
import LoginFormContainer from './session/login_form_container';
import CreateProductContainer from './product/create_product_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <header>
      <GreetingContainer />
    </header>
    <div className="body">
      <AuthRoute exact path="/" component={ProductIndexContainer} />
    </div>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route path="/products/new" component={CreateProductContainer} />
  </div>
);

export default App;
