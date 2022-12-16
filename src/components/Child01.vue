<!-- 子组件 -->
<template>
  <div class="v-text">
    <span>地址：</span>
    <input :value="props.text" @input="onInput" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String
});
const emits = defineEmits(['onTextChange']);
const onInput = (e) => {
  emits('onTextChange', e.target.value);
};
</script>
