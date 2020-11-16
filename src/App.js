import {useState} from 'react';


import './App.css';

// importing third party libraries
import { Router } from '@reach/router';

// importing other components
import Landing from './containers/LandingContainer/Landing';
import DashBoard from './containers/UserDashboard/UserDashboard';
import SignIn from './containers/SignIn/SignIn';
import Register from './containers/Register/Register';

// importing modularized stylesheets


// importing static content



function App() {

  const [user, setUser] = useState({
    "Name" : "",
    "FullName" : "",
    "username" : "liamcclane",
    "email" : "",
  });

  return (
    <div className="container-fluid">
      <Router>
        {user.username.length == 0
          ? <Landing path="/" />
          : <DashBoard path="/" user={user} />
        }
        <SignIn path="/signin" user={user}  setUser={setUser} />
        <Register path="/register" />
        <Register path="/register/:email" />
      </Router>
    </div>
  );
}

export default App;
