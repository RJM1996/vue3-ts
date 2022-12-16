import { defineStore } from 'pinia';
import type { MyState, MyStoreGetters, MyStoreActions } from './types';

export const useMyStore = defineStore<
  string,
  MyState,
  MyStoreGetters,
  MyStoreActions
>('my-store', {
  state: () => ({
    text: '环城东路9527号',
    list: [
      { name: '苹果', price: 20, count: 0 },
      { name: '香蕉🍌', price: 12, count: 0 },
      { name: '梨子', price: 15, count: 1 }
    ]
  }),

  getters: {
    totalPrice(state) {
      let total = 0;
      state.list.forEach((item) => {
        total += item.price * item.count;
      });
      return total;
    }
  },

  actions: {
    updateText(text) {
      this.text = text;
    },

    increase(index) {
      this.list[index].count += 1;
    },

    decrease(index) {
      if (this.list[index].count > 0) {
        this.list[index].count -= 1;
      }
    }
  }
});
console.log('sotre index');
// export const orderStore = useMyStore();
