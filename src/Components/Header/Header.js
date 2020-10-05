import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Images/logos/Group 1329.png';
import './Header.css';
import { userContext } from '../../App';

const Header = () => {
  const [loggedInUser] = useContext(userContext);
  const location = useLocation();
  const currentPath = location.pathname;
  let headerBg  ; 
  if(currentPath === "/" || currentPath === "/home"){
    headerBg = 'header-bg'; 
  }
  
    return (
        <div className= 'white-header' id={headerBg}>  
            <nav className= 'white-nav'>
                <ul>
                    <li> <Link to="/home"><img className="logo nav-brand" src={logo} alt=""/> </Link> </li>
                    {
                      currentPath === "/" || currentPath === "/home"?
                        <>
                          <li> <Link to="/">Home</Link></li>
                          <li> <Link to="/">Donation</Link></li>
                          <li> <Link  to="/events">Events</Link></li>
                          <li> <Link  to="/">Blog</Link></li>
                          <Link to="/register">
                             <button className= 'btn btn-primary'> Register</button>
                          </Link>
                          <Link to="/admin">
                             <button className= 'btn btn-secondary'> Admin</button>
                          </Link>
                        </> :
                        <> </> // else no element         
                    }

                    {  currentPath === "/events" ?
                      <>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/">Donation</Link></li>
                        <li> <Link  to="/events">Events</Link></li>
                        <li> <Link  to="/">Blog</Link></li>
                        <li> <b>{loggedInUser.name}</b></li>
                      </> :
                      <> </> // else no element                           
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;