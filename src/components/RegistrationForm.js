// import React, { useState } from 'react';
import "../styles/main.scss";

const RegistrationForm = () => {
  return (
    <form>
      <div className="section text-center">
        <h4 className="mb-3 pb-3">Sign Up</h4>
        <div className="form-group">
          <input type="text" className="form-style" placeholder="Full Name" />
        </div>
        <div className="form-group mt-2">
          <input type="tel" className="form-style" placeholder="Phone Number" />
        </div>
        <div className="form-group mt-2">
          <input type="email" className="form-style" placeholder="Email" />
        </div>
        <div className="form-group mt-2">
          <input
            type="password"
            className="form-style"
            placeholder="Password"
          />
        </div>
        <a className="btn mt-4">Register</a>
      </div>
    </form>
  );
};
export default RegistrationForm;
