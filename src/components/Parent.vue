<!-- 父组件 -->
<template>
  <div>订单信息：{{ text }}</div>
  <div class="app">
    <Child01 :text="text" @onTextChange="onTextChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Child01 from './Child01.vue';

const text = ref('环城东路888号');
const onTextChange = (newText) => {
  text.value = newText;
};
</script>
