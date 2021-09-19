import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import ErrorPage from './pages/ErrorPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/sign-up"> Sign up </Link>
        </li>
        <li>
          <Link to="/error"> Error </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
