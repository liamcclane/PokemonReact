import { useState } from 'react';


import './App.css';

// importing third party libraries
import { Router, navigate } from '@reach/router';

// importing other components
import Landing from './containers/LandingContainer/Landing';
import DashBoard from './containers/UserDashboard/UserDashboard';
import SignIn from './containers/SignIn/SignIn';
import Register from './containers/Register/Register';

// importing modularized stylesheets


// importing static content



function App() {

  const [user, setUser] = useState({
    "FullName": "",
    "username": "",
    "email": ""
  });

  const registerHandler = (e, first, last, email) => {
    e.preventDefault();
    setUser({
      "FullName": first + " " + last,
      "username": first + last.charAt(0),
      "email": email
    })
    navigate("/");
  }
  const signIn = () =>{
    console.log("signin");
  }
  const signOut = (e) => {
    console.log("In here");
    e.preventDefault();
    setUser({
      "FullName": "",
      "username": "",
      "email": ""
    })
    navigate("/");
  }

  return (
    <div className="container-fluid">
      <Router>
        {user.username.length == 0
          ? <Landing path="/" />
          : <DashBoard path={"/"} user={user} user={user} signOut={signOut} />
        }
        <DashBoard path="/user" user={user} signOut={signOut} />
        <SignIn path="/signin" />
        <Register path="/register" registerHandler={registerHandler} />
        <Register path="/register/:email" />
      </Router>
    </div>
  );
}

export default App;
