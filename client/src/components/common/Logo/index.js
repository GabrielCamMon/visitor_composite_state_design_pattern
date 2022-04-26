"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const logo_png_1 = __importDefault(require("./logo.png"));
require("./styles.css");
const Logo = () => (<div className="header-content_logo">
    <div>
      <img src={logo_png_1.default} alt="logo"/>
      <span>
        <b>Taste</b>
      </span>
    </div>
    <p>
      <b>Gcamon & Lívia</b>
    </p>
  </div>);
exports.default = Logo;
