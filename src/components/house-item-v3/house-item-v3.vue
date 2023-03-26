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
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="" />
          <span>{{ houseDate.location }}</span>
        </div>
        <div class="summary">{{ houseDate.summaryText }}</div>
        <div class="name">{{ houseDate.houseName }}</div>
        <div class="price">
          <div class="new">￥{{ houseDate.finalPrice }}</div>
          <div class="old">￥{{ houseDate.productPrice }}</div>
          <div class="tip" v-if="houseDate.priceTipBadge">
            {{ houseDate.priceTipBadge.text }}
          </div>
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
  padding: 8px 10px;
  color: #666;
  font-size: 12px;
  .location {
    display: flex;
    align-items: center;
    img {
      width: 12px;
      height: 12px;
    }
  }
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
    .new {
      color: #ff9645;
      font-size: 14px;
    }

    .old {
      margin: 0 3px;
      color: #999;
      font-size: 12px;
      text-decoration: line-through;
    }

    .tip {
      background-image: linear-gradient(270deg, #f66, #ff9f9f);
      color: #fff;
      padding: 0 6px;
      border-radius: 8px;
    }
  }
}
</style>
