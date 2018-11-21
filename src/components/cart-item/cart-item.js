import React, { Component } from 'react';
import Item from '../cart-item/cart-item'

const CartItem = ({ item }) => (

  <div className="collection-item">
  <div className="row">
    <div className="col-md-8">{item.product.name}</div>
    <div className="col-md-2">{centsToDollars(item.product.priceInCents)}</div>
    <div className="col-md-2">{item.quantity}</div>
  </div>
</div>

)

const centsToDollars = (cents) => {
  let dollars = cents / 100;
  return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"})
}



export default CartItem
