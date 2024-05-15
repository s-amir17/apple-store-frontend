<template>
   <div class="category-btns">
      <router-link @click="getAll" class="nav-link" :class="{ active: isActive == ' ' }" to="/"> Store </router-link>
      <router-link
         to="/"
         v-for="category in categories"
         :key="category._id"
         class="nav-link w-100"
         @click="getWithCategory(category.category)"
         :class="{ active: isActive == category.category }">
         {{ category.category }}
      </router-link>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
   data() {
      return {
         isActive: ' ',
      };
   },

   methods: {
      ...mapActions({
         getProducts: 'getProducts',
         getCategories: 'getCategories',
         getProductsCategory: 'getProductsCategory',
      }),

      getAll() {
         this.isActive = ' ';
         this.getProducts();
      },

      getWithCategory(category) {
         this.isActive = category;
         this.getProductsCategory(category);
      },
   },

   computed: {
      ...mapGetters({
         categories: 'categories',
      }),
   },

   mounted() {
      this.getCategories();
   },
};
</script>

<style lang="scss" scoped>
.active {
   background-color: #000 !important;
   color: #ea537b !important;
   font-weight: bold;
}
.category-btns {
   display: flex;
   .nav-link {
      margin-right: 1px;
      font-size: 20px;
      color: rgb(118, 117, 117);
      transition: all 0.3s ease-in 0s;
      &:hover {
         background-color: #000 !important;
         color: #fff !important;
      }
   }

   @media (max-width: 992px) {
      flex-direction: column;
      .nav-link {
         margin: 1px 0;
         text-align: center;
      }
   }
}
</style>
