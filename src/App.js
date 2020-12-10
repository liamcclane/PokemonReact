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


/**My Backlog
 * 
 *  -on full screen landing page accordion text is over expanding
 * 
 */

/**
 let user = {
   "_id": "1234",
   "FullName": "Lia McClane",
   "username": "LiaM",
   "email": "lia@email.com",
   "lists": ["9902", "1029"]
 }
 let list = {
   "_id": "9902",
   "title": "My Favorites",
   "movies": [
     "tt4574334", // stranger thing
     "tt7259746", // queer eye
     "tt6320628" // spiderman far from home
   ]
 }
 */



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
      "email": email,
      "lists": [],
    })
    navigate("/");
  }
  const signIn = (e, email) => {
    e.preventDefault();
    // find existing user in DB
    // log them into the session
    if (email.length > 0) {
      setUser({
        "FullName": "Jane Doe",
        "username": email,
        "email": email,
        "lists": ["9902", "1029"],
      })
    }
    navigate("/");
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
        {user.username.length === 0
          ? <Landing path="/" />
          : <DashBoard path={"/"} user={user} signOut={signOut} />
        }
        <DashBoard path="/user" user={user} signOut={signOut} />
        <SignIn path="/signin" signIn={signIn} />
        <Register path="/register" registerHandler={registerHandler} />
        <Register path="/register/:email" />
      </Router>

    </div>
  );
}

export default App;
