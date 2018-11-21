import React, { Component } from 'react';

const CartFooter = ({copywrite}) => {
  return (
    <nav className="navbar navbar-dark bg-secondary">
      <a className="navbar-brand" href="#">
        &copy;&nbsp;{copywrite}
      </a>
    </nav>
  )
}

export default CartFooter 
