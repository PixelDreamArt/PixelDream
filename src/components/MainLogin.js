"use client";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";

import { useState } from "react";

const MainLogin = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleSwitchForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="body">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section d-flex flex-column justify-content-center align-items-center ">
                <div className="title">
                  <h1 className="title__header">
                    <span>Log In </span>
                  </h1>
                  <h2 className="title__subtitle">
                    <span>Sign Up</span>
                  </h2>
                </div>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                  checked={showLoginForm}
                  onChange={handleSwitchForm}
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        {!showLoginForm ? <LoginForm /> : <RegistrationForm />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
