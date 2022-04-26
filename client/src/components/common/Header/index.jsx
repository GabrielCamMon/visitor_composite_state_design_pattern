import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="menu-icons">
            <i className="fa-solid fa-bars"></i>
            <i class="fa-solid fa-xmark"></i>
          </div>
          <a className="logo">
            <i class="fa-solid fa-utensils"></i>
          </a>
          <ul className="nav-list">
            <li>
              <a>All</a>
            </li>
            <li>
              <a>
                Pastas <i class="fa-solid fa-caret-down"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <a>Noodles</a>
                </li>
                <li>
                  <a>Pizzas</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                Salads <i class="fa-solid fa-caret-down"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <a>Tropical Salads</a>
                </li>
                <li>
                  <a>Mediterranean Salads</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Hamburger</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
