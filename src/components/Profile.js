import React from 'react';
import axios from 'axios';
import JSONPretty from 'react-json-pretty';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {

  const { isAuthenticated, user } = useAuth0();

  return (
    isAuthenticated && (
     <div>
        <img src={user.picture}/>
        <br/>
        <h2>Profile: {user.name}</h2>
        <br/>
        <br/>
        <h2>Personal data</h2>
        <br/>
        <h3>First name: {user.given_name}</h3>
        <h3>Email: {user.email}</h3>
      </div>
    )

  )
}

export default Profile
