import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../../redux/cart/cart.selector";
import "./styles.css";

const ButtonCartCount = ({ cartCount }) => {
  const history = useNavigate();
  return (
    <div className="btnCartCount" onClick={() => history("/cart")}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(ButtonCartCount);
