import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register/Register';
import Events from './Components/Events/Events';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const userContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isLogIn : false,
    name    : '',
    email   : ''
  });
  useEffect(() => {
    document.title = "Volunteer Network"
 }, []);

  return (
    <userContext.Provider value = {[loggedInUser,setLoggedInUser]} >
      
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/home">
            <Home/>
          </Route>

          <PrivateRoute exact path="/register">
            <Register/>
          </PrivateRoute>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/events">
            <Events/>
          </Route>

          <Route path='*'>
            <h2 className = 'text-center py-5'> 4O4  not found .......</h2>
        </Route>
        </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
