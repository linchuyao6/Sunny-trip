<script setup>
import useOrderStore from '@/store/modules/order'
import navBar from '@/components/nav-bar/nav-bar.vue'
import orderItem from './component/order_item.vue'

import { ref } from 'vue'

const orderStore = useOrderStore()
orderStore.getAllOrderList()
orderStore.getRecentOrderList()
orderStore.getPendOrderList()

const activeName = ref('all')
</script>

<template>
  <div id="order">
    <navBar>
      <template #title>
        <div class="title">
          订单列表
        </div>
      </template>
    </navBar>
    <van-tabs v-model:active="activeName" color="var(--primary-color)">
      <van-tab title="全部订单" name="all">
        <!-- v-if如果是判断空对象，那么也返回true -->
        <div class="allitem" v-if="orderStore.allOrderList.orders">
          <template v-for="(item, index) in orderStore.allOrderList.orders">
            <orderItem :data="item"></orderItem>
          </template>
        </div>
      </van-tab>
      <van-tab title="近期订单" name="recent">
        <div class="allitem" v-if="orderStore.recentOrderList.orders">
          <template v-for="(item, index) in orderStore.recentOrderList.orders">
            <orderItem :data="item"></orderItem>
          </template>
        </div>
      </van-tab>
      <van-tab title="待支付" name="pend">
        <div class="allitem" v-if="orderStore.pendOrderList.orders">
          <template v-for="(item, index) in orderStore.pendOrderList.orders">
            <orderItem :data="item"></orderItem>
          </template>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="less" scoped>
#order {
  background-color: #f7f8fb;
  margin-bottom: 50px;
}
:deep(.van-tab--active) {
  color: var(--primary-color);
}
.title {
  font-weight: 500;
  font-size: 16px;
  color: var(--primary-color);
}
</style>
