import React from "react";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    nav("/");
  };
  return (
    <form className="label-input" onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="text" name="email" placeholder="Enter Email Address" />

      <label>Password</label>
      <input type="password" name="password" placeholder="Enter Password" />
      <input className="submit-btn" type="submit" value="Login" />
      <p className="forgot">Forgot password?</p>
    </form>
  );
}

export default LoginForm;
