import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import MainBar from './components/MainBar';
import PageChooser from './components/PageChooser';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import SearchPage from './pages/SearchPage';
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
    
      
        <Route path="/home" component={UserPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/search">
          <PageChooser data={[
            {label: 'Series', path: '/search/series'},
            {label: 'Actors', path: '/search/actors'},
            {label: 'Friends', path: '/search/friends'}
          ]}/>

          <Route exact path="/search/friends" component={SearchUserPage} />
          <Route path="/search" component={SearchPage} />
        </Route>

        <Route path="/serial/:id" component={SerialPage} />
        <MainBar /> 
      
    </Switch>
  );
}

export default App;
