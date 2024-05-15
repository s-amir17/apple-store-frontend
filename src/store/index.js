import { createStore } from 'vuex';
const axios = require('axios');

export default createStore({
   state: {
      productsList: [],
      product: {},
      cart: [],
      categories: [],
   },

   getters: {
      productsList: ({ productsList }) => productsList,
      categories: ({ categories }) => categories,
      cartProducts: ({ cart }) => cart.length,
      sum: ({ cart }) => cart.reduce((acc, item) => acc + item.product.price * item.qty, 0),
   },

   mutations: {
      GET_PRODUCTS(state, productsList) {
         state.productsList = productsList;
      },
      GET_ONE_PRODUCT(state, product) {
         state.product = product;
      },
      searchProduct(state, specificProduct) {
         state.productsList = state.productsList.filter(product => product.title.toLowerCase().includes(specificProduct.toLowerCase()));
      },

      ADD_PRODUCT(state, { product, qty }) {
         state.cart.push({ product, qty });
      },
      REMOVE_PRODUCT(state, id) {
         state.cart = state.cart.filter(item => item.product._id !== id);
      },
      CLEAR_CART(state) {
         state.cart = [];
      },

      SORTED_PRODUCTS(state, selected) {
         if (selected == 'low') {
            state.productsList.sort((a, b) => a.price - b.price);
         } else if (selected == 'high') {
            state.productsList.sort((a, b) => b.price - a.price);
         }
      },

      GET_CATEGORIES(state, categories) {
         state.categories = categories;
      },
   },

   actions: {
      async getProducts({ commit }) {
         try {
            const response = await axios.get('http://localhost:3000/store/products');
            commit('GET_PRODUCTS', response.data);
         } catch (error) {
            console.error(error);
         }
      },
      async getOneProduct({ commit }, id) {
         await axios
            .get('http://localhost:3000/store/product/' + id)
            .then(response => {
               commit('GET_ONE_PRODUCT', response.data);
            })
            .catch(error => console.log(error));
      },

      async addProduct({}, { product, qty }) {
         await axios
            .post('http://localhost:3000/cart', {
               title: product.title,
               price: product.price,
               qty,
            })
            .then(function (response) {
               console.log(response);
            })
            .catch(function (error) {
               console.log(error);
            });
         location.reload();
      },
      async removeProduct({}, id) {
         await axios
            .delete(`http://localhost:3000/cart/${id}`)
            .then(response => {
               console.log(`Deleted post with ID ${id}`);
            })
            .catch(error => {
               console.error(error);
            });
         location.reload();
      },
      async removeAllProduct() {
         await axios
            .delete(`http://localhost:3000/cart`)
            .then(response => {
               console.log(`Deleted!`);
            })
            .catch(error => {
               console.error(error);
            });
         location.reload();
      },

      async getCategories({ commit }) {
         try {
            const response = await axios.get('http://localhost:3000/store/categories');
            commit('GET_CATEGORIES', response.data);
         } catch (error) {
            console.error(error);
         }
      },

      async getProductsCategory({ commit }, category) {
         try {
            const response = await axios.get('http://localhost:3000/store/products/' + category);
            commit('GET_PRODUCTS', response.data);
         } catch (error) {
            console.error(error);
         }
      },

      sortedProducts({ commit }, selected) {
         commit('SORTED_PRODUCTS', selected);
      },
   },
});

// const data = await axios
//    .get('http://localhost:3000/cart')
//    .then(res => res.data)
//    .catch(error => console.log(error));

// let addedProduct = data.find(item => {
//    console.log(item, 'ITEM');
//    console.log(product, 'PRODUCT');
//    item._id === product._id;
// });

// console.log(addedProduct);
// if (addedProduct) {
//    await axios
//       .put(`http://localhost:3000/cart/${id}`, {
//          qty: qty,
//       })
//       .then(response => {
//          console.log(`Deleted post with ID ${id}`);
//       })
//       .catch(error => {
//          console.error(error);
//       });
// location.reload();
// }
