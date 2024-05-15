<template>
   <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary border-bottom pt-0">
      <div class="container">
         <a class="navbar-brand" href="https://www.apple.com/store" target="_blank"><i class="fa-brands fa-apple" style="font-size: 25px"></i></a>

         <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>

         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="margin: auto">
               <li class="nav-item">
                  <Categories></Categories>
               </li>
            </ul>

            <router-link v-if="!userLogged" to="/sign" @click.prevent class="user">
               <i class="fa-solid fa-user me-2"></i>
            </router-link>
            <button v-else @click="logout" class="btn">
               <i class="fa-solid fa-right-from-bracket"></i>
            </button>

            <div class="dropdown text-center">
               <button class="cart" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-bag-shopping"></i>
                  <span v-if="length" class="qty"> {{ length }} </span>
               </button>
               <div class="dropdown-menu dropdown-menu-end" @click.stop>
                  <MyCart @sendLength="getLength" />
               </div>
            </div>
         </div>
      </div>
   </nav>
</template>

<script>
import Categories from './Categories.vue';
import MyCart from './MyCart.vue';

export default {
   components: { MyCart, Categories },
   data() {
      return {
         length: 0,
      };
   },

   methods: {
      logout() {
         localStorage.clear();
         location.reload();
      },

      getLength(n) {
         this.length = n;
      },
   },
   computed: {
      userLogged() {
         let user = JSON.parse(localStorage.getItem('user-info'));
         return user ? true : false;
      },
   },
   mounted() {
      this.getLength();
   },
};
</script>

<style lang="scss" scoped>
.cart {
   cursor: pointer;
   left: auto;
   right: 0;
   background: none;
   border: none;
   position: relative;
   @media (max-width: 768px) {
      margin-top: 15px;
   }
}
.qty {
   border-radius: 50%;
   background-color: red;
   color: white;
   font-weight: 800;
   font-size: 10px;
   line-height: 90%;
   font-family: 'Courier New', Courier, monospace;
   padding: 3px;

   position: absolute;
   left: 14px;
   bottom: 14px;
}
.user {
   color: black;
   i {
      @media (max-width: 992px) {
         display: inline-block;
         margin-left: 49%;
      }
   }
}
.btn {
   border: none;
   background: none;
   @media (max-width: 992px) {
      margin-left: 47%;
   }
}
</style>
