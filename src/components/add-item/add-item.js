import React, { Component } from 'react';


class AddItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      quantity: 1,
      products: 1
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log('i would be submitting')
    let product = this.props.products.find((item) => item.id === +this.state.products )
    this.props.onAddItem({products: product, quantity: this.state.quantity})

}

  quantityOnChange = (e) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      quantity: e.target.value
    })
  }

  render() {
    return (
    <div className="container">
        <form onSubmit={this.onSubmit}>
      <div className="form-group">
        <label htmlFor="quantity">Quantity</label>
        <input onChange={this.quantityOnChange} value={this.state.quantity} type="number" min="1" className="form-control" id="quantity" placeholder="1"/>
    </div>
      <div className="form-group">
        <label htmlFor="products">Products</label>
        <select value={this.state.products} className="form-control" id="inputGroupSelect01"
          onChange={(e) => {
            console.log(e.target.value)
            return this.setState({ ...this.state, products: e.target.value })}
          }
           value={this.state.value}>
          <option value="default">Select a product</option>
          {this.props.products.map((product, i) => {
            return(
              <option key={product.id} value={product.id}>{product.name}</option>
            )
          })}
        </select>
     </div>
     <button type="submit" className="btn btn-primary">Submit</button>
   </form>
    <br />
    </div>
    )

  }
}



export default AddItem
