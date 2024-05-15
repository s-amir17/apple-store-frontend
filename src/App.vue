<template>
   <MyHeader />

   <router-view />
</template>

<script>
import MyHeader from './components/MyHeader.vue';

export default {
   components: { MyHeader },
};
</script>

<style lang="scss">
#app {
   background-color: rgb(247, 240, 240);
   min-height: 100%;
}
html,
body {
   height: 100%;
   padding-top: 30px;
   padding-bottom: 78px;
}
</style>
