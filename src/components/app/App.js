import React, { Component } from 'react';
import CartHeader from '../header-footer/CartHeader';
import CartFooter from '../header-footer/CartFooter';
import CartItems from '../cart-items/cart-items';
import CartItem from '../cart-item/cart-item';
import AddItem from '../add-item/add-item';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ],
      cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]
    }
  }

onDeleteItem = ({ id }) => {
  const newItems = this.state.cartItemsList.filter((item) => item.id !==id)
  this.setState({
    ...this.state,
    cartItemsList: newItems
  })
}
onAddItem = ({ products, quantity }) => {
  console.log('product ', products)
  const maxId = this.state.cartItemsList
  .reduce((acc, el) => Math.max(acc, el.id), 0)
  const nextMaxId = maxId + 1
  const newProduct = { id: nextMaxId, product: products, quantity }
  const newProducts = [...this.state.cartItemsList, newProduct]
  console.log(newProduct)

  this.setState({
    ...this.state,
    cartItemsList: newProducts
  })
}


// onAddItem = ({ item, reason }) => {
//   const maxId = this.state.items
//   .reduce((acc, el) => Math.max(acc, el.id), 0)
//
//   const nextMaxId = maxId + 1
//   const newItem = { id: nextMaxId, item, reason }
//   const newItems = [...this.state.items, newItem]
//
//   this.setState({
//     ...this.state,
//     items: newItems
//   })
// }



render() {

  return (
    <div className="container">
   <CartHeader />
   <CartItems items={this.state.cartItemsList} onDeleteItem={this.onDeleteItem}/>
   <AddItem products={this.state.products} onAddItem={this.onAddItem}/>
   <CartFooter copywrite={2016}/>
 </div>
  )
  }
}
export default App;
