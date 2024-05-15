<template>
   <div class="container my-5">
      <div class="row">
         <div class="col-12">
            <MySelect />
         </div>

         <div class="col" style="margin-bottom: 120px">
            <form class="d-flex" @click.prevent>
               <input v-model.trim="specificProduct" ref="inputt" id="myinput" placeholder="Поиск . . ." />
               <button @click="showInp" id="mybtn" type="submit">
                  <i class="fa-solid fa-magnifying-glass"></i>
               </button>
            </form>

            <div class="row my-3" style="gap: 20px">
               <transition-group name="list">
                  <SingleProduct class="col-12 col-md-6" v-for="product in searchedProduct" :key="product._id" :product="product" />
               </transition-group>
            </div>
         </div>
      </div>
   </div>
   <teleport to="#footer">
      <MyFooter />
   </teleport>
</template>

<script>
import SingleProduct from './SingleProduct.vue';
import MySelect from './MySelect.vue';
import MyFooter from './MyFooter.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
   components: { SingleProduct, MySelect, MyFooter },
   data() {
      return {
         specificProduct: '',
         isMounted: false,
      };
   },
   methods: {
      ...mapActions(['getProducts']),
      showInp() {
         this.$refs.inputt.focus();
      },
   },

   computed: {
      ...mapGetters({
         productsList: 'productsList',
      }),

      searchedProduct() {
         return this.productsList.filter(product => product.title.toLowerCase().includes(this.specificProduct.toLowerCase()));
      },
   },

   mounted() {
      this.getProducts();
      this.$refs.inputt.focus();
   },
};
</script>

<style lang="scss" scoped>
.list-item {
   display: inline-block;
   margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
   transition: all 0.8s ease;
}
.list-enter-from,
.list-leave-to {
   opacity: 0;
   transform: translateX(30px);
}

#myinput {
   border: none;
   border-bottom: 1px solid rgb(118, 117, 117);
   background: none;
   margin: 0 0 10px auto;

   &:focus {
      outline: none;
   }

   @media (max-width: 992px) {
      margin: 22px auto;
      width: 100%;
   }
}
#mybtn {
   border: none;
   background: none;
   border-radius: 50%;
   transform: translate(0, -3px);
   transition: all 0.3s ease-in-out 0s;
   &:hover {
      transform: scale(1.2);
   }
   @media (max-width: 768px) {
      transform: translate(-30px, 0);
   }
}
</style>
