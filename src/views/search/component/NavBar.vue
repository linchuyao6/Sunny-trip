<script setup>
import searchBar from '@/components/searchBar/searchBar.vue'
</script>

<template>
  <div id="navBar">
    <van-nav-bar title="标题" left-arrow @click-left="onClickLeft">
      <template #right>
        <i class="right_icon"> </i>
      </template>
      <template #title>
        <div class="content">
          <searchBar></searchBar>
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>

<style lang="less" scoped>
.right_icon {
  width: 20px;
  height: 15px;
  background-image: url('@/assets/img/home/icon-right-menu.png');
  background-size: 20px 15px;
}
</style>
