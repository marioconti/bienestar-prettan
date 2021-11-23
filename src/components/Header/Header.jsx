import React from "react";
import mainLogo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <div className="header">
      <a href="#">
        <img className="mainLogo" src={mainLogo} alt="main logo" />
      </a>
      <nav className="nav">
        <ul>
          <li>home</li>
          <li>
            <Link
              className="productList"
              to="productList"
              spy={true}
              smooth={true}
              duration={2000}
            >
              products
            </Link>
          </li>
          <li>
            <Link
              className="suscription"
              to="suscription"
              spy={true}
              smooth={true}
              duration={3000}
            >
              suscription
            </Link>
          </li>
          <li>contact</li>
          <Link
            className="link-header"
            to="header"
            spy={true}
            smooth={true}
            duration={3000}
          >
            <i class="fas fa-arrow-circle-up"></i>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
