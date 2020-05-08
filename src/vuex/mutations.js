export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },
  ADD_TO_CART: (state, product) => {
    if (state.cart.length) {
      const sameProduct = state.cart.find(
        (item) => item.article === product.article
      );
      sameProduct
        ? state.cart.map(
            (item) => item.article === product.article && item.quantity++
          )
        : state.cart.push(product);
    } else {
      state.cart.push(product);
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1);
  },
  PLUS_PRODUCT_QUANTITY: (state, index) => {
    [...state.cart, state.cart[index].quantity++];
  },
  MINUS_PRODUCT_QUANTITY: (state, index) => {
    state.cart[index].quantity > 1
      ? [...state.cart, state.cart[index].quantity--]
      : state.cart.splice(index, 1);
  },
};
