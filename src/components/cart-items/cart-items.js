import React, { Component } from 'react';
import CartItem from '../cart-item/cart-item';

const CartItems = ({ items, onDeleteItem }) => (

    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {items.map((item, idx) => (
          <CartItem key={idx} id={CartItem.id} item={item} />
        ))}
      </div>
      <p>Cart Total: ${((items.reduce((acc, item) => (acc += item.product.priceInCents * item.quantity), 0))/100).toFixed(2)} </p>
    </div>
)

export default CartItems
