import type { Store } from 'pinia';

// 声明订单商品数据类型
export interface MyItem {
  name: string;
  price: number;
  count: number;
}

// 声明基于Pinia的公共数据类型
export interface MyState {
  text: string;
  list: MyItem[];
}

// 声明基于Pinia的Getters读数据方法的数据类型
export type MyStoreGetters = {
  totalPrice(state: MyState): number;
};

// 声明基于Pinia的Actions操作数据方法的数据类型
export interface MyStoreActions {
  updateText(text?: string): void;
  increase(index: number): void;
  decrease(index: number): void;
}

// 声明基于Pinia的公共数据及其操作方法的聚合数据类型
export type MyStore = Store<
  'my-store',
  MyState,
  MyStoreGetters,
  MyStoreActions
>;
