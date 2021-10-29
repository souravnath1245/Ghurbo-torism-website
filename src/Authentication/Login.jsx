import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "./../Hooks/useFirebase";
import './login.css';

const Login = () => {
  const { signInUsingGoogle } = useFirebase();
  const handleGoogleSignIn = () => {
    signInUsingGoogle();
  };
  return (
    <div className="loginPage">
    <div className="loginSection mx-auto text-center">
        <h4 className="my-4">Please Login</h4>
        <button onClick={handleGoogleSignIn} className="btn btn-danger">
          Google SignIn{" "}
        </button>
        <p className="my-3">Already have an Account ? </p>
      </div>
    </div>
  );
};

export default Login;
