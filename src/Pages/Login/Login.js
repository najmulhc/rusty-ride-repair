import React, { useRef } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth } from "../../Firebase.init";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const refEmail = useRef("");
  const refPassword = useRef("");
  const navigate = useNavigate();

  //getting data using react firebase hooks

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const goToRegister = () => {
    navigate("/register");
  };

  const login = (event) => {
    const email = refEmail.current.value;
    const password = refPassword.current.value;
    signInWithEmailAndPassword(email, password);
    event.preventDefault();
  };
  if (user) {
    console.log("it is working perfectly");
    console.log(user);
    navigate("/");
  }
  if (loading) {
    console.log("loading while login");
  }
  if (error) {
    console.error(error);
  }

  return (
    <div className="card  mx-auto p-3 mt-4 w-50">
      <h1 className="font-bold text-1 text-success m-0 p-0">Log in here</h1>
      <form onSubmit={login}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={refEmail}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            ref={refPassword}
          ></input>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            varient="success"
            id="exampleCheck1"
          ></input>
          <label className="form-check-label" htmlFor="exampleCheck1">
            Keep me logged in
          </label>
        </div>
        <br />
        <h6 className="text-4">
          New to Rusty?{" "}
          <span onClick={goToRegister} className="text-success">
            Register
          </span>
        </h6>
        <button type="submit" className="btn btn-success w-100 ">
          Log in
        </button>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
