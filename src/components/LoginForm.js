import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  selectEmail,
  selectPassword,
} from "../redux/slices/userSlice";
const LoginForm = () => {
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      dispatch(setEmail(value));
    } else if (name === "password") {
      dispatch(setPassword(value));
    }
    // setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log(email);
    console.log(password);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="section text-center">
        <h4 className="mb-4 pb-3">Log In</h4>
        <div className="form-group">
          <input
            onChange={handleInputChange}
            defaultValue={data.email}
            type="email"
            name="email"
            className="form-style"
            placeholder="Email"
          />
          <i className="input-icon uil uil-at"></i>
        </div>
        <div className="form-group mt-2">
          <input
            onChange={handleInputChange}
            defaultValue={data.password}
            type="password"
            name="password"
            className="form-style"
            placeholder="Password"
          />
          <i className="input-icon uil uil-lock-alt"></i>
        </div>
        <a className="btn mt-4">Login</a>
        <p className="mb-0 mt-4 text-center">
          <a className="link">Forgot your password?</a>
        </p>
      </div>
    </form>
  );
};
export default LoginForm;
