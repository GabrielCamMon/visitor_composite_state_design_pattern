"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_1 = require("react-router");
require("./styles.css");
const EmptyCart = () => {
    const history = (0, react_router_1.useNavigate)();
    return (<div className="emptyCart">
      <img src="https://merchlist.co/assets/emptycart.png" alt=""/>
      <button onClick={() => history("/")}>
        <i className="fas fa-long-arrow-alt-left"></i> Shop Now
      </button>
    </div>);
};
exports.default = EmptyCart;
