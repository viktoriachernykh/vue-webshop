import axios from 'axios';

export default {
  FETCH_PRODUCTS({ commit }) {
    return axios('http://localhost:3000/products', {
      method: 'GET',
    })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  ADD_PRODUCT_TO_CART({ commit }, product) {
    commit('ADD_TO_CART', product);
  },
  DELETE_PRODUCT_FROM_CART({ commit }, index) {
    commit('REMOVE_FROM_CART', index);
  },
  PLUS_PRODUCT_QUANTITY({ commit }, index) {
    commit('PLUS_PRODUCT_QUANTITY', index);
  },
  MINUS_PRODUCT_QUANTITY({ commit }, index) {
    commit('MINUS_PRODUCT_QUANTITY', index);
  },
};
