import React, { Component } from 'react';
import Logo from './Logo';
import Cart from './Cart';
const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    padding: '0 50px',
    position: 'relative',
    boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
  }
}
class Navbar extends Component {
  render() {
    const { cart, showCart, displayCart } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Cart cart={cart} showCart={showCart} displayCart={displayCart} />
      </nav>
    )
  }
}


export default Navbar;
