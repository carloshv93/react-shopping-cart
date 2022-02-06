import React, { Component } from 'react';
import Product from './Product';

const styles = {
    products: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}
class Products extends Component {
    render() {
        const { products, addToCart } = this.props;

        return (
            <div style={styles.products}>
                {products.map(product =>
                    <Product
                        key={product.name}
                        product={product}
                        addToCart={addToCart}
                    />
                )}
            </div>
        )
    }
}

export default Products;

