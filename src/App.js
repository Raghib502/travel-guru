import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Book from './Components/Book/Book';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header/>
        <Switch>
          <Route path="/home">
          <Home/>
          </Route>
          <Route path= "/login">
          <Login/>
          </Route>
          <PrivateRoute path ="/book/:placeName">
            <Book/>
          </PrivateRoute>
        <Route exact path="/">
          <Home/>
        </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
