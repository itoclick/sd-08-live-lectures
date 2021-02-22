const INITIAL_STATE = {
  cartItems: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_ITEM_TO_CART':
    return {
      ...state, cartItems: state.cartItems.concat(action.payload.item),
    };
  default:
    return state;
  }
};

export default reducer;
