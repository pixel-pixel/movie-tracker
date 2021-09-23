import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import MainBar from './components/MainBar';

import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import SearchPage from './pages/SearchPage';
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
          <Link to="/home"> Home </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <PrivateRoute>
          <Route path="/home" component={HomePage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/search" component={SearchPage} />

          <MainBar /> 
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
