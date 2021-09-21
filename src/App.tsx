import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import ErrorPage from './pages/ErrorPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { PrivateRoute } from './tools/Route';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/sign-up"> Sign up </Link>
        </li>
        <li>
          <Link to="/sign-in"> Sign in </Link>
        </li>
        <li>
          <Link to="/error"> Error </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <PrivateRoute path="*" component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
