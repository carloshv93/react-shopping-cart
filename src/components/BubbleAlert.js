import React, { Component } from 'react';

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width: '20px',
    }
}

class BubbleAlert extends Component {
    getNumber(n) {
        return !n
            ? ' '
            : n > 9
                ? '9+'
                : n
    }

    render() {
        const { items } = this.props;
        return (
            <span style={styles.bubbleAlert}>
                {this.getNumber(items)}
            </span>
        )
    }
}

export default BubbleAlert;