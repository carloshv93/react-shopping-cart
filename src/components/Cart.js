import React, { Component } from 'react';
import Button from './Button';
import BubbleAlert from './BubbleAlert';
import CartDetails from './CartDetails';

const styles = {
    cart: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '15px',
        padding: "15px",
    },
    bubble: {
        position: 'relative',
        left: 30,
        top: 25,
    }
}
class Cart extends Component {
    render() {
        const { cart, showCart, displayCart } = this.props;
        const quantity = cart.reduce((acc, product) => acc + product.quantity, 0);
        return (
            <div>
                <span style={styles.bubble}>
                    {quantity !== 0
                        ? <BubbleAlert items={quantity} />
                        : null
                    }
                </span>
                <Button style={styles.cart} onClick={displayCart}>Cart</Button>
                {showCart &&
                    <CartDetails cart={cart} />
                }
            </div>
        )
    }
}

export default Cart;