import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useLocation, useHistory } from "react-router-dom";
import "./login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
    .then((result) => {
      history.push(redirect_uri);
    })
  };
  return (
    <div className="loginPage">
      <div className="loginSection mx-auto text-center">
        <h4 className="my-4">Please Login</h4>
        <button onClick={handleGoogleSignIn} className="btn btn-danger">
          Google SignIn{" "}
        </button>
        <br />
        <span className="my-2">Please Create Account First </span>
        <Link to="/register">
          <a href="">Create an Account </a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
