<template>
   <div class="container-md my-5">
      <div class="product" style="margin-top: 100px">
         <div class="product__img">
            <img :src="`http://localhost:3000/` + product.title + '.jpg'" :alt="product.title" :title="product.title" />
         </div>
         <div class="product__body">
            <h2>{{ product.title }}</h2>

            <h3>{{ product.price }}₸</h3>
            <h4>
               категория: <span>{{ product.category }}</span>
            </h4>
            <p>
               {{ product.desc }}
            </p>
            <div class="btns" role="group">
               <button @click="showDialog = true" type="button" class="btn btn-outline-success">Купить сейчас</button>
               <MyDialog v-model:show="showDialog" />
               |
               <button @click="addToCart" type="button" class="btn btn-success mb-3">Добавить в корзину</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import MyDialog from '@/components/MyDialog.vue';
import { mapActions, mapState } from 'vuex';

export default {
   components: { MyDialog },
   data() {
      return {
         showDialog: false,
      };
   },
   computed: {
      ...mapState(['product']),
   },

   methods: {
      ...mapActions(['getOneProduct', 'addProduct']),

      addToCart() {
         console.log(this.product);
         this.addProduct({ product: this.product, qty: 1 });
      },
   },

   mounted() {
      this.getOneProduct(this.$route.query.id);
   },
};
</script>

<style lang="scss" scoped>
.product {
   display: flex;
   align-items: center;
   gap: 50px;
   position: relative;
   box-shadow: rgba(0, 0, 0, 0.3) 1px 2px 7px 3px;
   border-radius: 25px;
   padding-right: 10px;

   &__img {
      flex: 0 1 40%;
      height: 600px;
      border-radius: 25px;
      padding: 15px 5px;
      border-right: 0.1px solid rgba(0, 0, 0, 0.1);
      img {
         width: 100%;
         height: 100%;
         object-fit: contain;
      }
      cursor: pointer;
      transition: all 0.3s ease-in-out 0s;
      &:hover {
         box-shadow: 0 0 11px rgba(0, 0, 0, 0.5);
      }
   }

   &__body {
      flex: 1 1 60%;
      color: darkslategrey;
      text-align: center;
      :not(:last-child) {
         margin-bottom: 15px;
      }

      h3 {
         color: red;
         font-weight: 800;
         letter-spacing: 1.5px;
         text-shadow: 1.5px 1px 1px darkslategrey;
      }

      span {
         color: seagreen;
         font-weight: 700;
      }

      p {
         font-style: italic;
         font-size: 25px;
      }
      .btns {
         margin-top: 26px;
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 15px;
         button {
            border-radius: 17px;
            font-weight: bold;
         }
      }
      // .btn-buy {
      //    position: absolute;
      //    right: 0;
      //    bottom: 10px;
      //    margin-right: 15px;
      //    text-transform: uppercase;
      // }
   }
}

@media (max-width: 990px) {
   .product {
      flex-wrap: wrap-reverse;
      justify-content: center;
   }
   .product__img {
      flex: 1 1 auto;
      margin-top: 30px;
   }
}
</style>
