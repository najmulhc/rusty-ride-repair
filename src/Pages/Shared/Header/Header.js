import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../../Firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success lg-fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Rusty Ride Repair
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About us
              </Link>
            </li>
            {user ? (
              <li className="nav-item">
                <a href="/" onClick={logout} className="nav-link">
                  Log out
                </a>
              </li>
            ) : (
              <li>
                <Link to="/login" className="nav-link">
                  Log in
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
