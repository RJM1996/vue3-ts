<template>
  <div class="app">
    <v-info v-bind:text="store.text" v-bind:list="store.list" />
    <v-text v-bind:text="store.text" v-on:updateText="updateText" />
    <v-list
      v-bind:list="store.list"
      v-on:increase="increase"
      v-on:decrease="decrease"
    />
  </div>
</template>

<script setup lang="ts">
// import { reactive } from "vue";
import VInfo from './components/OrderInfo.vue';
import VText from './components/OrderAddress.vue';
import VList from './components/OrderGoods.vue';
import { store } from './data/store';

const updateText = (text: string) => {
  store.text = text;
};

const increase = (index: number) => {
  store.list[index].count += 1;
};

const decrease = (index: number) => {
  if (store.list[index].count > 0) {
    store.list[index].count -= 1;
  }
};
</script>

<style>
.app {
  width: 100%;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 0px 0px 9px #00000066;
  text-align: center;
}
</style>
