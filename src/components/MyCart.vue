<template>
   <div class="wrap">
      <transition-group name="list">
         <div v-for="item in myCart" :key="item._id" v-if="myCart.length" class="cart">
            <div class="cart__body">
               <h3>
                  {{ item.title }}
               </h3>
               <div>
                  {{ item.qty }} &#10005 {{ item.price }}₸
                  <span>
                     {{ fixed(item.qty * item.price) }}₸
                  </span>
               </div>
               <hr>
            </div>
            <button @click="removeFromCart(item._id)" class="cart__btn"><i class="fa-solid fa-trash"></i></button>
         </div>
      </transition-group>
      <div v-if="myCart.length">
         <span class="float-start sum">Сумма: <b>{{ fixed(total) }}₸</b></span>

         <button class="btn btn-danger float-end" @click="removeAllProduct">Очистить корзину</button>
      </div>
      <h3 v-else style="color: crimson">Ваша корзина пуста.</h3>
   </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
   data() {
      return {
         myCart:[]
      }
   },
   methods: {
      async getCartProducts() {
         await fetch('http://localhost:3000/cart')
         .then(res => res.json())
         .then(data => {
            this.myCart = data
            this.$emit('sendLength', this.myCart.length)
         })
            .catch(error => console.log(error))
      },

      ...mapActions({
         removeProduct: 'removeProduct',
         removeAllProduct: 'removeAllProduct',
      }),
      removeFromCart(id) {
         this.removeProduct(id);
      },
      fixed(n) {
         return n.toFixed(2);
      },
   },
   computed: {
      total(){
         return this.myCart.reduce((acc, item) => acc + item.price * item.qty, 0)
      }
   },

   mounted() {
      this.getCartProducts()
   },
};
</script>

<style lang="scss" scoped>
.wrap {
   overflow-y: auto;
   overflow-x: hidden;
   max-height: 500px;
   width: 420px;
   padding: 10px 20px 20px;
   .cart{
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 20px;
   margin-bottom: 10px;

   &__body{
      border-bottom: 1px solid rgba(240, 248, 255, 0.215);
      margin-bottom: 5px;
      width: 100%;

      div{
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      span{
         font-size: 20px;
         font-weight: 700;
         letter-spacing: 0.5px;
      }
   }

   &__btn {
      border: none;
      background: none;
      font-size: 24px;
      color: darkgrey;
      transition: all 0.3s ease-in-out 0s;
      &:hover {
         color: #c62943;
      }
   }
}
   .sum{
      font-size: 25px;
      color: #c62943;
      text-shadow: 0.7px 0px 1px whitesmoke ;
   }
}

.list-item {
   display: inline-block;
   margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
   transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
   opacity: 0;
   transform: translateX(220px);
}
</style>
