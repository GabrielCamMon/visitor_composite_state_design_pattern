"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const reselect_1 = require("reselect");
const cart_selector_1 = require("../../../redux/cart/cart.selector");
require("./styles.css");
const ButtonCartCount = ({ cartCount }) => {
    const history = (0, react_router_1.useNavigate)();
    return (<div className="btnCartCount" onClick={() => history("/cart")}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>);
};
const mapStateToProps = (0, reselect_1.createStructuredSelector)({
    cartCount: cart_selector_1.selectCartItemsCount,
});
exports.default = (0, react_redux_1.connect)(mapStateToProps)(ButtonCartCount);
