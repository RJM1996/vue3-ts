<template>
  <div class="v-info">
    <b>订单信息</b>
    <div>收货地址：{{ orderStore.text }}</div>
    <div>总金额：{{ orderStore.totalPrice }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { store } from '../data/store';
import { useMyStore } from '../../../store/index';
import type { MyStore } from 'src/types';

const orderStore: MyStore = useMyStore();

// const props = defineProps({
//   text: String,
//   list: Array,
// });
// const totalPrice = ref(0);

// watch(props, () => {
//   const list = props.list;
//   let total = 0;
//   list.forEach((item) => {
//     total += item.price * item.count;
//   });
//   totalPrice.value = total;
// });

// watch(
//   store,
//   () => {
//     let total = 0;
//     store.list.forEach((item) => {
//       total += item.price * item.count;
//     });
//     totalPrice.value = total;
//   },
//   { immediate: true }
// );
</script>

<style>
.v-info {
  width: 400px;
  margin: 20px auto;
  padding: 10px;
  box-shadow: 0px 0px 16px 0px #00000038;
  border: 1px solid #d6d5d5;
  font-size: 20px;
  color: #222222;
  background: #ffffff;
  font-size: 18px;
  text-align: left;
  line-height: 22px;
}
</style>
