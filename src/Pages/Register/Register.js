import React, { useRef } from "react";
import { useNavigate } from "react-router";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import {auth} from '../../Firebase.init'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const navigate = useNavigate();

  // the current user
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const goToLogin = () => {
    navigate("/login");
  };

  const handleFormSubmit = (event) => {
    // preventing default
    event.preventDefault();
    // gathering varibles required for authentication
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmedPassword = confirmPasswordRef.current.value;
    if(password === confirmedPassword){createUserWithEmailAndPassword(email, password);}
  };
  if(user){
    console.log('user exists');
    console.log(user);
  }
  if(loading){
    console.log('data is loading');
  }
  if(error){
    console.log(error);
  }
 
  return (
    <div className="card md-w-25 w-75 mx-auto p-3 mt-4">
      <h1 className="font-bold text-1 text-success m-0 p-0">Register here</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={emailRef}
          ></input>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            varient="success"
            ref={passwordRef}
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Password"
            ref={confirmPasswordRef}
          ></input>
        </div>
        <br />
        <h6 className="text-4">
          Already Registered?{" "}
          <span onClick={goToLogin} className="text-success">
            Log in Here
          </span>
        </h6>
        <button type="submit" className="btn btn-success w-100 ">
          Register
        </button>
      </form>
      <SocialLogin/>
    </div>
  );
};

export default Register;
