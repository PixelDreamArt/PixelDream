import "../styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          {/* <img src="..\assets\logo5.png" /> */}
        </div>
        <ul className="nav__items">
          <Link href="/">
            <li className="nav__items-link">
              <i className="bi bi-house-door-fill"></i>
            </li>
          </Link>
          <Link href="/">
            <li className="nav__items-link">
              <i className="bi bi-basket3-fill"></i>
            </li>
          </Link>
          <Link href="/login">
            <li className="nav__items-link">
              <i className="bi bi-person-circle"></i>
            </li>
          </Link>
          <li className="nav__items-link">
            <i className="bi bi-search-heart"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
