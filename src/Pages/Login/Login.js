import React, { useRef } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth } from "../../Firebase.init";

const Login = () => {
  const refEmail = useRef("");
  const refPassword = useRef("");
  const navigate = useNavigate();

  //getting data using react firebase hooks
  const [signInWithEmailAndPassword, Guser, Gloading, Gerror] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const goToRegister = () => {
    navigate("/register");
  };
  const googleSignIn = (event) => {
    signInWithGoogle();
    event.preventDefault();
  }
  const login = (event) => {
    const email = refEmail.current.value;
    const password = refPassword.current.value;
    signInWithEmailAndPassword(email, password);
    event.preventDefault();
  };
  if (user || Guser) {
    console.log("it is working perfectly");
    user? console.log(user) : console.log(Guser); 
    navigate("/");
  }
  if (loading || Gloading) {
    console.log("loading while login");
  }
  if (error || Gerror) {
    console.error(error);
  }

  return (
    <div className="card md-w-25 w-75 mx-auto p-3 mt-4">
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
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
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
        <button onClick={googleSignIn} className="btn btn-secondery w-100 ">
          Continue With Google
        </button>
      </form>
    </div>
  );
};

export default Login;
