<script setup>
import useHomeStore from '@/store/modules/home'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()

const { categories } = storeToRefs(homeStore)
</script>

<template>
  <div class="categorie ">
    <template v-for="(item, index) in categories.data" :key="item.id">
      <div class="item">
        <div class="pic">
          <img :src="item.pictureUrl" alt="" />
        </div>
        <div class="title_word">
          {{ item.title }}
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.categorie {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  margin-top: 8px;
  // 隐藏滚动条
  &::-webkit-scrollbar {
    display: none;
  }
}
.item {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  text-align: center;
}
.pic img {
  width: 32px;
  height: 32px;
}
</style>
