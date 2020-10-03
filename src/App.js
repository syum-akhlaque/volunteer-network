import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register/Register';

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/home">
            <Home/>
          </Route>

          <Route exact path="/register">
            <Register/>
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route path='*'>
            <h2 className = 'text-center py-5'> 4O4  not found .......</h2>
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
