<script setup>
import { computed } from '@vue/reactivity'
const props = defineProps({
  houseDate: {
    type: Object,
    default: () => ({}),
  },
})
const Score = computed(() => {
  return Number(props.houseDate.commentScore)
})
</script>

<template>
  <div class="box">
    <div class="inner">
      <img :src="houseDate.image.url" />
      <div class="info">
        <div class="summary">{{ houseDate.summaryText }}</div>
        <div class="name">{{ houseDate.houseName }}</div>
        <div class="price">
          <van-rate
            v-model="Score"
            size="15px"
            color="#fff"
            allow-half
            readonly
          />
          <div class="new">￥{{ houseDate.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.box {
  width: 50%;

  .inner {
    position: relative;
    margin: 5px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
.info {
  position: absolute;
  bottom: 0;
  padding: 8px 10px;
  color: #fff;

  .summary {
    font-size: 12px;
  }

  .name {
    margin: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
