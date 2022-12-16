import { reactive } from 'vue';

export const store = reactive({
  text: '环城东路666号',
  list: [
    { name: '苹果', price: 20, count: 0 },
    { name: '香蕉', price: 12, count: 0 },
    { name: '梨子', price: 15, count: 0 },
    { name: '橘子🍊', price: 5, count: 2 }
  ]
});
