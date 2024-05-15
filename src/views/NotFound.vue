<template>
   <div class="container error">
      <h3>error 404</h3>
      <h2>Page not found.</h2>
      <router-link to="/">Go to Store</router-link>
   </div>
</template>

<style lang="scss" scoped>
.error {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   h3 {
      color: red;
   }
}
</style>
