import Link from "next/link";

import "../../styles/main.scss";
const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <div className="login__container">
          <div className="title">
            <h1 className="title__header">Login Page</h1>
            <h2 className="title__subtitle">Subtitle</h2>
          </div>
          <Link href="./registration">
            <h3>Registration</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
