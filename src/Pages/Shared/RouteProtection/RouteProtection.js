import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router";
import { auth } from "../../../Firebase.init";

const RouteProtection = ({ children }) => {
  const [user] = useAuthState(auth);
  if (!user) {
    return <Navigate to="/login" />;
  }
  console.log(user);
  return children;
};

export default RouteProtection;
