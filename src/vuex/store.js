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
