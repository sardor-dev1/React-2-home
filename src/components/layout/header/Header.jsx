import React from "react";
import { NavList } from "../../static";
import "../header/header.scss";

import navLogo from "../../../assets/images/navLogo.svg";

function Header() {
  const navItem = NavList.map((link) => {
    return (
      <li className="nav__left__item" key={link.id}>
        <a className="nav__left__link" href="#">
          {link.title}
        </a>
      </li>
    );
  });

  return (
    <header>
      <nav className="nav container">
        <div className="nav__left">
          <div>
            <img src={navLogo} alt="" />
          </div>
          <ul className="nav__left__list">{navItem}</ul>
        </div>
        <button className="nav__btn">Booking Now</button>
      </nav>
    </header>
  );
}

export default Header;
