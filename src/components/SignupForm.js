import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignupForm() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [random, setRandom] = useState(Math.floor(Math.random() * 2));
  const [signUpError, setSignUpError] = useState("");
  const nav = useNavigate();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const submitHandler = async (e) => {
    e.preventDefault();
    setErrors(validate(details));
    setRandom(Math.floor(Math.random() * 2));
    console.log(random);
    if (isValid) {
      if ([true, false][random]) {
        alert(`You've successfully created your account, Please login`);
        nav("/");
      } else {
        setSignUpError("Email already exists");
      }
    }
  };
  const showError = (name) => {
    switch (name) {
      case "email":
        return errors.email;
      case "username":
        return errors.username;
      case "password":
        return errors.password;
      case "password_confirmation":
        return errors.password_confirmation;
      default:
        return "";
    }
  };

  const validate = (details) => {
    const errors = {};
    if (!details.email) {
      errors.email = "Email is required";
    }
    if (!details.password) {
      errors.password = "Password is required";
    }
    if (!details.password_confirmation) {
      errors.password_confirmation = "Confirm your password";
    }

    setIsValid(Object.values(errors).length === 0);
    return errors;
  };
  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setDetails({ ...details, email: e.target.value });
        regex.test(e.target.value)
          ? setErrors({ ...errors, email: "" })
          : setErrors({ ...errors, email: "Email must be in a valid format." });

        break;
      case "password":
        setDetails({ ...details, password: e.target.value });
        e.target.value.length >= 8
          ? setErrors({ ...errors, password: "" })
          : setErrors({
              ...errors,
              password: "Password must be at least 8 characters.",
            });
        break;
      case "password_confirmation":
        setDetails({ ...details, password_confirmation: e.target.value });
        if (e.target.value === details.password) {
          setErrors({ ...errors, password_confirmation: "" });
        } else {
          setErrors({
            ...errors,
            password_confirmation: "Passwords do not match",
          });
        }

        break;
      default:
        return 0;
    }
  };
  return (
    <form className="label-input" onSubmit={submitHandler}>
      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder="Enter Email Address"
        onChange={(e) => handleChange(e)}
      />
      <p>{showError("email")}</p>
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={(e) => handleChange(e)}
      />
      <p>{showError("password")}</p>
      <label>Confirm Password</label>
      <input
        type="password"
        name="password_confirmation"
        onChange={(e) => handleChange(e)}
      />
      <p>{showError("password_confirmation")}</p>
      <p>{signUpError}</p>
      <input className="submit-btn" type="submit" value="Create Account" />
    </form>
  );
}

export default SignupForm;
