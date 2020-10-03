import React from 'react';
import { Link } from 'react-router-dom';
import headerBg from '../../Images/image/headerBg.png';
import logo from '../../Images/logos/Group 1329.png';
import './Header.css'


const Header = () => {
    return (
        <div style={{  
            backgroundImage: `linear-gradient( rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9) ), url(${headerBg})`,
                    
          }} className= 'white-header'>
            <nav className= 'white-nav'>
                <ul>
                    <li> <Link to="/home"><img className="logo" src={logo} alt=""/> </Link>  </li>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/">Donation</Link></li>
                    <li> <Link  to="/">Events</Link></li>
                    <li> <Link  to="/">Blog</Link></li>
                    
                    <Link  to="/register">
                       <button className= 'btn btn-primary' onClick = '' > Register</button>
                     </Link> 
                     <Link  to="/">
                       <button className= 'btn btn-secondary' onClick = '' > Sign Out</button>
                     </Link> 
                     
                </ul>
            </nav>
        </div>
    );
};

export default Header;