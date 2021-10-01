import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import MainBar from './components/MainBar';
import PageChooser from './components/PageChooser';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import SearchSeriesPage from './pages/SearchSeriesPage';
import SearchUserPage from './pages/SearchUserPage';
import SerialPage from './pages/SerialPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import UserPage from './pages/UserPage';
import { PrivateRoute } from './tools/Route';

function App() {
  return (
    <Switch>
      <Route exact path="/sign-up" component={SignUpPage} />
      <Route exact path="/sign-in" component={SignInPage} />
    
      <Route path='/'>
        <Route path="/home" component={UserPage} />
        <Route path="/news" component={NewsPage} />
        <Route exact path="/users" component={SearchUserPage} />
        <Route exact path="/series" component={SearchSeriesPage} />

        <Route path="/series/:id" component={SerialPage} />
        
        <MainBar /> 
      </Route>
    </Switch>
  );
}

export default App;
