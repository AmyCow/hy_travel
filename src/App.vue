<script setup>
  import TabBar from "./components/common/tabbar/TabBar.vue";
  
  components: { TabBar }
  
</script>

<template>
  <router-view></router-view>
  <tab-bar></tab-bar>
</template>

<style scoped>

</style>
