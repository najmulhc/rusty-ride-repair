import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/");
  };
  return (
    <div className="card w-25 mx-auto p-3 mt-4">
      <h1 className="font-bold text-1 text-success m-0 p-0">Login here</h1>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            varient="success"
            id="exampleCheck1"
          ></input>
          <label class="form-check-label" for="exampleCheck1">
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
        <button type="submit" class="btn btn-success w-100 ">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
