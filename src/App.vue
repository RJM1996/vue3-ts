<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <Test01 /> -->
  <!-- <Test02 /> -->
  <!-- <Parent /> -->
  <ShopOrder />
</template>

<script lang="ts">
import Test01 from './components/Test01.vue';
import Test02 from './components/Test02.vue';
import Parent from './components/Parent.vue';
import ShopOrder from './pages/shopOrder/index.vue';

export default {
  name: 'App',
  components: {
    Test01,
    Test02,
    Parent,
    ShopOrder
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
