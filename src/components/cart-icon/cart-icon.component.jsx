import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

// Svg
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// Styles
import './cart-icon.styles.css'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{ itemCount }</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);