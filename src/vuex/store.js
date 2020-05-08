import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
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
  },
  actions: {
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
      commit('SET_CART', product);
    },
    DELETE_PRODUCT_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default store;
