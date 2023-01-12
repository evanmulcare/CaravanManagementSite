// src/components/login-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
    <button
    className="bg-lime-500 text-white p-3 rounded-md hover:bg-lime-700"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
    )
  );
};

export default LoginButton;