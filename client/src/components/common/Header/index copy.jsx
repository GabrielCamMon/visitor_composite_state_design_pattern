import e from "cors";
import React from "react";
import "./styles.css";

const Header = (props) => {
  const createMenu = (menu) => {
    if (menu.leaf) {
      return (
        <li name={e.type}>
          <a>{e.name}</a>
        </li>
      );
    }
    return menu.children.map((e) => {
      return (
        <li>
          <a name={e.type}>
            {e.name} <i className="fa-solid fa-caret-down"></i>
          </a>
          {createMenuLoop(e)}
        </li>
      );
    });
  };
  const createMenuLoop = (menu) => {
    const tag = (
      <li name={e.type}>
        <a>{e.name}</a>
      </li>
    );
    if (menu.leaf) {
      return tag;
    } else {
      return menu.children.map((e) => {
        return (
          <ul className="sub-menu">
            <li>
              <a name={e.type}>
                {e.name} <i className="fa-solid fa-caret-down"></i>
              </a>
            </li>
            {createMenuLoop(e)}
          </ul>
        );
      });
    }
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="menu-icons">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <a className="logo">
            <i className="fa-solid fa-utensils"></i>
          </a>

          <ul className="nav-list">
            {props.menu && createMenu(props.menu)}
            <li>
              <a>All</a>
            </li>
            <li>
              <a>
                Pastas <i className="fa-solid fa-caret-down"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <a>
                    Noodles <i className="fa-solid fa-caret-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a>Teste</a>
                    </li>
                    <li>
                      <a>Teste</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Pizzas</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                Salads <i className="fa-solid fa-caret-down"></i>
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
