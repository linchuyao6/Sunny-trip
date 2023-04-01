<script setup>
import navBar from '@/components/nav-bar/nav-bar.vue'
</script>

<template>
  <div id="message">
    <navBar>
      <template #title>
        <div class="title">消息中心</div>
      </template>
    </navBar>
    <div class="content">
      <img src="@/assets/img/message/icon_message.png" alt="" />
      <div class="text">暂无聊天消息</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#message {
  height: 100vh;
  background-color: #f7f8fb;
  .title {
    font-weight: 500;
    font-size: 16px;
    color: var(--primary-color);
  }
  .content {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 88%;
    }
  }
}
</style>
