import React, { useContext } from 'react';
import googleLogo from '../../Images/logos/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import './Login.css';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    //google login process
    const googleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
          .then(result => {
            const token = result.credential.accessToken;
            const {displayName, email} = result.user;
            const newUserInfo = {...loggedInUser};
            newUserInfo.isLogIn = true;
            newUserInfo.name = displayName;
            newUserInfo.email = email;
            setLoggedInUser(newUserInfo);
            storezAuthToken();
            history.replace(from);
          })
          .catch(error => {
            console.log(error.message);
          })
      }
      const storezAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true) /* forceRefresh */ 
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken)
          }).catch(function(error) {
            // Handle error
          });
    }
    
    return (
        <div className = 'login-form'>
        <h4>Login With</h4>
               
             <button className = 'logo-button my-5' onClick={googleSignIn}> <img src={googleLogo}  alt=""/>Continue With Google</button>
        
        </div>
    );
};

export default Login;