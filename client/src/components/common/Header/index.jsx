import React, { useEffect, useState } from "react";

import "./styles.css";
import menuService from "../../../services/menuService";
import { v4 as uuidv4 } from "uuid";

const Header = (props) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    (async function menuApi() {
      await menuService
        .get()
        .then((res) => {
          setMenu(res);
        })
        .catch((e) => {});
    })();
  }, []);

  const handleType = (type) => {
    props.handleType(type);
  };

  const createMenuLoop = (menu) => {
    return menu.children.map((e, i) => {
      if (e.leaf) {
        return (
          <li key={uuidv4()} name={e.type}>
            <a onClick={() => handleType(e.type)}>{e.name}</a>
          </li>
        );
      } else {
        return (
          <li key={uuidv4()}>
            <a onClick={() => handleType(e.type)} name={e.type}>
              {e.name} <i className="fa-solid fa-caret-down"></i>
            </a>
            <ul key={uuidv4()} className="sub-menu">
              {createMenuLoop(e)}
            </ul>
          </li>
        );
      }
    });
  };

  const createMenu = (menu) => {
    return menu.children.map((e, i) => {
      if (e.leaf) {
        return (
          <li key={uuidv4()}>
            <a
              name={e.type}
              style={!e.enabled ? { color: "#ccc" } : {}}
              onClick={() => handleType(e.type)}
            >
              {e.name}
            </a>
          </li>
        );
      } else {
        return (
          <li key={uuidv4()}>
            <a name={e.type} onClick={() => handleType(e.type)}>
              {e.name} <i className="fa-solid fa-caret-down"></i>
            </a>

            <lu className="sub-menu">{createMenuLoop(e)}</lu>
          </li>
        );
      }
    });
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
            <li key={uuidv4()}>
              <a onClick={() => handleType("")}>All</a>
            </li>
            {menu && createMenu(menu)}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
