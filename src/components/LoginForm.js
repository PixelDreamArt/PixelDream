import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/lib/hooks";
import { setEmail } from "../lib/features/user/userSlice"; // Import the setEmail function

import "../styles/main.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useAppSelector((state) => state.user.email); // Access email from Redux state

  // Define state for form inputs
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // Update form input values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to update email in Redux store
    dispatch(setEmail(data.email));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{email}</h1>
      <div className="section text-center">
        <h4 className="mb-4 pb-3">Log In</h4>
        <div className="form-group">
          <input
            onChange={handleInputChange}
            value={data.email}
            type="email"
            name="email"
            className="form-style"
            placeholder="Email"
          />
        </div>
        <div className="form-group mt-2">
          <input
            onChange={handleInputChange}
            value={data.password}
            type="password"
            name="password"
            className="form-style"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn mt-4">
          Login
        </button>
        <p className="mb-0 mt-4 text-center">
          <a className="link">Forgot your password?</a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
