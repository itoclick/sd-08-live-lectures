import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <>
        <h1>Meu Carrinho</h1>
        <ul>
          {cartItems.map((item, index) => <li key={ index }>{item.name}</li>)}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(Cart);
