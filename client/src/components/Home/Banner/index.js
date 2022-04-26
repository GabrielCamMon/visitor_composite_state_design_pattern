"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./styles.css");
const banner_png_1 = __importDefault(require("./banner.png"));
const Logo_1 = __importDefault(require("../../common/Logo"));
const Banner = ({ handleScrollMenu }) => (<div className="header">
    <div className="header-content">
      <Logo_1.default />
      <div className="content-main">
        <h1>Delicious food for your cravings</h1>
        <p>We made fresh and healthy meals with different recipes</p>
        <button onClick={handleScrollMenu}>
          View Menu <i className="fas fa-long-arrow-alt-right"></i>
        </button>
      </div>
    </div>
    <img className="header-img" src={banner_png_1.default} alt="banner"/>
  </div>);
exports.default = Banner;
