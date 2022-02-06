import React, { Component } from 'react';

const styles = {
    layout:{
        width:'100%',
        height: 'calc(100vh - 100px)',//Navbar is 100px
        backgroundColor: '#eee',
        color: '#0A283E',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    container:{
        width:'1200px',
    }
}
class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;