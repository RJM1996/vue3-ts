<template>
  <form>
    <textarea v-model="state.text" placeholder="信息" />
    <div>中文字数：{{ state.zhCount }}</div>
  </form>
</template>

<script setup lang="ts">
import { reactive, watch, toRaw } from 'vue';

// 计算文本中文个数函数
function countZhText(txt) {
  const zhRegExp = /[\u4e00-\u9fa5]{1,}/g;
  const zhList = txt.match(zhRegExp);
  let count = 0;
  zhList.forEach((item) => {
    count += item.length;
  });
  return count;
}
const defaultText = '今天是2022年01月01日';
const state = reactive({
  text: defaultText,
  zhCount: countZhText(defaultText)
});
console.log(toRaw(state), typeof toRaw(state));

watch(
  // 监听 state.text 的变化
  [() => state.text],
  (newVal, oldVal) => {
    console.log('watch text: ', newVal, oldVal);
    // 当监听到state.text 变化，就会触发这个回调函数
    state.zhCount = countZhText(newVal.text);
  }
);
</script>
