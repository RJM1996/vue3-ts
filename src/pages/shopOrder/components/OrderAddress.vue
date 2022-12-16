<template>
  <div class="v-text">
    <span>地址：</span>
    <input :value="orderStore.text" @input="onInput" />
  </div>
</template>

<script setup lang="ts">
import { useMyStore } from '../../../store/index';
const orderStore = useMyStore();
// import { store } from "../data/store";
// const props = defineProps({
//   text: String,
// });
// const emits = defineEmits(["updateText"]);

const onInput = (e: any) => {
  orderStore.updateText(e.target.value);
};
</script>

<style>
.v-text {
  width: 400px;
  margin: 20px auto;
  padding: 10px;
  box-shadow: 0px 0px 16px 0px #00000038;
  border: 1px solid #d6d5d5;
  font-size: 20px;
  color: #222222;
  background: #2196f34d;
  font-size: 16px;
}
.v-text input {
  width: 200px;
  height: 32px;
  line-height: 32px;
  margin-right: 10px;
  box-sizing: border-box;
  font-size: 16px;
}
</style>
