<script setup>
defineProps({
  priceDetail: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div id="price">
    <div class="title">{{ priceDetail.title }}</div>
    <div class="introduction">{{ priceDetail.introduction }}</div>
  </div>
</template>

<style lang="less" scoped>
#price {
  padding: 16px 12px;
  border-top: 5px solid #f2f3f4;
  .title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
  }
  .introduction {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.5;
    color: #666;
  }
}
</style>
