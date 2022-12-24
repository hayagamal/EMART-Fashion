import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authorizeUser, addUsers } from "../redux/actions/productActions";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
function Account() {
  return (
    <div style={{ "padding-top": "100px" }}>
      <div className="Account ui container grid">
        <div className="Login">
          <h3>Login</h3>
          <LoginForm />
        </div>
        <div className="Signup">
          <h3>Sign Up</h3>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default Account;
