import { useRef, useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { setCredentials } from "../lib/features/authorization/authSlice";
import { useLoginMutation } from "../lib/features/authorization/authApiSlice";

import "../styles/main.scss";

const LoginForm = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    // Sprawdzenie, czy userRef.current nie jest null
    if (userRef.current) {
      // Wywołanie metody focus na elemencie DOM
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ user, pwd }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPwd("");
      navigate("/welcome");
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);

  const handlePwdInput = (e) => setPwd(e.target.value);
  // }, [email]);

  return (
    <form onSubmit={handleSubmit}>
      {/* <h1>{email}</h1> */}
      <div className="section text-center">
        <h4 className="mb-4 pb-3">Log In</h4>
        <div className="form-group">
          <input
            onChange={handleUserInput}
            value={user}
            type="email"
            name="email"
            className="form-style"
            placeholder="Email"
          />
        </div>
        <div className="form-group mt-2">
          <input
            onChange={handlePwdInput}
            value={pwd}
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
