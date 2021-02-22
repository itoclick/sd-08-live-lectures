import React from 'react';
import { connect } from 'react-redux';

import books from '../products';
import addItemToCartAction from '../actions';

class BooksList extends React.Component {
  render() {
    const { addItemToCart } = this.props;
    return (
      <>
        <h1>Lista de livros</h1>
        <ul>
          {books.map((book) => (
            <li key={ book.name }>
              {book.name}
              {' '}
              -
              {' R$'}
              {book.price}
              <button
                type="button"
                onClick={ () => addItemToCart(book) }
              >
                Adicionar
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCartAction(item)),
});

export default connect(null, mapDispatchToProps)(BooksList);
