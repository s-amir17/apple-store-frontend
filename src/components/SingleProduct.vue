<template>
   <div v-if="product" @click="$router.push({ path: '/store', query: { id: product._id } })" class="product">
      <div class="product__image">
         <img :src="`http://localhost:3000/` + product.title + '.jpg'" :alt="product.title" />
      </div>
      <div class="product__body">
         <h4>
            {{ product.title }}
         </h4>
         <h5>{{ product.price }} ₸</h5>
         <button class="btn btn-primary">Купить</button>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      product: Object,
   },
};
</script>

<style lang="scss" scoped>
.product {
   margin: 0 auto;
   max-width: 400px;
   text-align: center;
   cursor: pointer;
   color: rgb(29, 29, 31);
   border-radius: 18px;
   transition: all 0.3s ease-in-out 0s;
   display: flex;
   flex-direction: column;
   box-shadow: rgba(0, 0, 0, 0.1) 2px 3px 9px 2px;

   &:hover {
      transform: scale(1.04);
      box-shadow: rgba(0, 0, 0, 0.2) 3px 5px 12px 2px;
   }

   &__image {
      padding: 10px;
      margin-top: auto;
      max-height: 400px;

      img {
         max-width: 100%;
         height: 100%;
         object-fit: cover;
      }
   }

   &__body {
      padding: 10px;
      margin-top: auto;
      text-align: center;

      h4 {
         text-decoration: underline;
         display: inline-block;
         max-width: 250px;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;

         &:hover {
            color: rgb(118, 117, 117);
         }
      }
      p {
         text-transform: capitalize;
         font-style: italic;
      }
   }
   // @media (max-width: 1200px) {
   //    transform: translate(100px);
   // }
   // @media (max-width: 992px) {
   //    transform: translate(0, 0);
   //    margin: 0 auto;
   // }
}
</style>
