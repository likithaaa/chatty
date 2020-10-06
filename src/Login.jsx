import React from 'react';
import './Login.css';
import ChatIcon from '@material-ui/icons/Chat';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <ChatIcon />

        <div className="loginTitle">
          <h2>Sign In </h2>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign in With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
