import React from 'react';
import useFirebase from './../Hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle} =  useFirebase()
    const handleGoogleSignIn =()=>{
        signInUsingGoogle();
    }
    return (
        <div>
            <h4>This is login page</h4>
            <button onClick={handleGoogleSignIn} className="btn btn-danger">Google SignIn </button>
        </div>
    );
};

export default Login;