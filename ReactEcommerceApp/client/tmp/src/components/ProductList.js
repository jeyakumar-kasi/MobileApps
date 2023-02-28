import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import {addToCart} from "../store/actions/cartActions";


class ProductList extends Component
{
    addToCart = (product) => {
        this.props.addToCart(product);
    }

    render() {
        return (
            <div className="container">
                <h2>Product List</h2>
                <br/>
                <div className="row">

                    {
                        this.props.products.map(product => <Product product={product} addToCart={this.addToCart} inCart={this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 } key={product.id} /> )
                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        products: state.product.products,
        cart: state.cart.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)