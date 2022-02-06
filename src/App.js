import React, { Component } from 'react';
import Products from './components/Products';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    products: [
      { name: 'tomato', price: 3, img: "/products/tomate.jpg" },
      { name: 'peas', price: 1.5, img: "/products/arbejas.jpg" },
      { name: 'lettuce', price: 2, img: "/products/lechuga.jpg" },
    ],
    cart: [
      // { name: 'tomato', price: 3, img: "/products/tomate.jpn", quantity: 1, }
    ],
    showCart: false,
  }

  displayCart = () => {
    if (this.state.cart.lenght) this.setState({ showCart: !this.state.showCart })
  }

  addToCart = (product) => {
    const { cart } = this.state;
    if (cart.find(item => item.name === product.name)) {
      const newCart = cart.map(item => item.name === product.name
        ? ({
          ...item,
          quantity: item.quantity + 1,
        })
        : item)
      return this.setState({ cart: newCart })
    }
    this.setState({
      cart: [...this.state.cart, { ...product, quantity: 1 }]
    })
  }
  render() {
    const { showCart } = this.state;
    return (
      <div>
        <Navbar cart={this.state.cart} showCart={showCart} displayCart={this.displayCart} />
        <Layout>
          <Title>Store</Title>
          <Products
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
