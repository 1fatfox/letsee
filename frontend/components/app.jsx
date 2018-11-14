import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRoute } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <i className="fab fa-etsy"></i>
      <h1 className='letsee_logo'>letsee</h1>

    <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
