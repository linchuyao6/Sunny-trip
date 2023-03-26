<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  moreMessage: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div id="section">
    <div class="title" v-if="title">
      <h2>{{ title }}</h2>
    </div>
    <div class="center">
      <slot>
        我是默认内容
      </slot>
    </div>
    <div class="bottom" v-if="moreMessage">
      {{ moreMessage }}
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<style lang="less" scoped>
#section {
  padding: 0 15px;
  margin-top: 12px;
  border-top: 5px solid #f2f3f4;
  background-color: #fff;
  .title {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    h2 {
      font-size: 20px;
      color: #333;
    }
  }
  .center {
    padding: 10px 0;
  }
  .bottom {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 44px;
    line-height: 44px;
    color: #ff9645;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
