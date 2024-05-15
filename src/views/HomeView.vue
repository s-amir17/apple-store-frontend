<template>
   <div>
      <MyTitle />
      <AppleStore />
   </div>
</template>

<script>
import MyTitle from '@/components/MyTitle.vue';
import AppleStore from '@/components/AppleStore.vue';

export default {
   components: { AppleStore, MyTitle },
};
</script>

<style lang="scss" scoped></style>
