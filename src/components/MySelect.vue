<template>
   <div class="my-select">
      <select v-model="selected" @change="sortProducts(selected)">
         <option value="" disabled>Сортировать по цене</option>
         <option v-for="option in options" :key="option.value" :value="option.value">{{ option.title }}</option>
      </select>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
   data() {
      return {
         selected: '',
         options: [
            { value: 'low', title: 'Сначала дешевле' },
            { value: 'high', title: 'Сначала дороже' },
         ],
      };
   },

   methods: {
      ...mapActions(['sortedProducts']),

      sortProducts(selected) {
         this.sortedProducts(selected);
      },
   },

   computed: {
      ...mapGetters({
         products: 'products',
      }),
   },

   mounted() {
      this.sortedProducts();
   },
};
</script>

<style lang="scss" scoped>
select {
   border-radius: 7px;
   cursor: pointer;
}
</style>
