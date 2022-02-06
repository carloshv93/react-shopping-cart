import React, { Component } from 'react';

const styles = {
    cartDetails: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 25,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.1)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },
    productImg: {
        width: 50,
        height: 32,
    },
    product: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alingItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #AAA',
    },
    productList: {
        margin: 0,
        padding: 0,
    }
}
class CartDetails extends Component {
    render() {
        const { cart } = this.props;
        return (
            <div style={styles.cartDetails}>
                <ul style={styles.productList}>
                    {cart.map(product =>
                        <li key={product.name} style={styles.product}>
                            <img style={styles.productImg} src={product.img} alt={product.name} />
                            {product.name} <span>{product.quantity}</span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default CartDetails;