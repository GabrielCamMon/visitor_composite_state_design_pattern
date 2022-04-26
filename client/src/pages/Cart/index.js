"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const reselect_1 = require("reselect");
const EmptyCart_1 = __importDefault(require("../../components/Cart/EmptyCart"));
const Footer_1 = __importDefault(require("../../components/common/Footer"));
const Logo_1 = __importDefault(require("../../components/common/Logo"));
const Menu_1 = __importDefault(require("../../components/common/Menu"));
const cart_selector_1 = require("../../redux/cart/cart.selector");
require("./styles.css");
const Cart = ({ cartCount, cartList, cartTotal }) => {
    return (<>
      <div className='cart-header'>
        <Logo_1.default />
      </div>
      {cartCount === 0 ? (<EmptyCart_1.default />) : (<div className='orders'>
          <h1 className='orders-heading'>Your Orders</h1>
          <div className='orders-menu'>
            <Menu_1.default list={cartList}/>
          </div>
          <h3 className='orders-total'>Your Total ${cartTotal}</h3>
        </div>)}
      <Footer_1.default />
    </>);
};
const mapStateToProps = (0, reselect_1.createStructuredSelector)({
    cartCount: cart_selector_1.selectCartItemsCount,
    cartList: cart_selector_1.selectCartItems,
    cartTotal: cart_selector_1.selectCartTotal,
});
exports.default = (0, react_redux_1.connect)(mapStateToProps)(Cart);
