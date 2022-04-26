"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const reselect_1 = require("reselect");
const cart_action_1 = require("../../../../redux/cart/cart.action");
const cart_selector_1 = require("../../../../redux/cart/cart.selector");
const ButtonAddRemoveItem_1 = __importDefault(require("../../ButtonAddRemoveItem"));
require("./styles.css");
const MenuItem = ({ item, cartCount, cartList, cartAddItem, cartRemoveItem, }) => {
    const { id, img, name, price, info } = item;
    const handleQuantity = () => {
        let quantity = 0;
        if (cartCount !== 0) {
            const foundItemInCart = cartList.find((item) => item.id === id);
            if (foundItemInCart) {
                quantity = foundItemInCart.quantity;
            }
        }
        return quantity;
    };
    return (<div className='item'>
      <img src={img} alt='food'/>
      <div className='item-head_desc'>
        <p className='head_desc-name'>{name}</p>
        <p className='head_desc-info'>
          <small>{info}</small>
        </p>
      </div>
      <div className='item-foot_desc'>
        <span className='foot_desc-price'>${price}</span>
        <ButtonAddRemoveItem_1.default quantity={handleQuantity()} handleRemoveItem={() => cartRemoveItem(item)} handleAddItem={() => cartAddItem(item)}/>
      </div>
    </div>);
};
const mapStateToProps = (0, reselect_1.createStructuredSelector)({
    cartCount: cart_selector_1.selectCartItemsCount,
    cartList: cart_selector_1.selectCartItems,
});
const mapDispatchToProps = (dispatch) => ({
    cartAddItem: (item) => dispatch((0, cart_action_1.cartAddItem)(item)),
    cartRemoveItem: (item) => dispatch((0, cart_action_1.cartRemoveItem)(item)),
});
exports.default = (0, react_redux_1.connect)(mapStateToProps, mapDispatchToProps)(MenuItem);
