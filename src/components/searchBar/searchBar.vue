<script setup>
import useMainStore from '@/store/modules/main'
import { getSimpleDay } from '@/utils/format_date'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const mainStore = useMainStore()

const nowDate = computed(() => {
  return getSimpleDay(mainStore.nowDate)
})
const nextDate = computed(() => {
  return getSimpleDay(mainStore.nextDate)
})
</script>

<template>
  <div id="searchBar">
    <div class="search">
      <div class="left">
        <div class="start">
          <div class="name">住</div>
          <div class="date">{{ nowDate }}</div>
        </div>
        <div class="end">
          <div class="name">离</div>
          <div class="date endicon">{{ nextDate }}</div>
        </div>
      </div>
      <div class="content">
        <div class="keyword">关键字/位置/民宿</div>
      </div>
      <div class="right">
        <i class="icon"></i>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#searchBar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
.search {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
  line-height: 45px;
  padding: 0 10px;
  font-size: 14px;
  color: #999;
  border-radius: 6px;
  background: #f2f4f6;
}

.left {
  display: flex;
  flex-direction: column;
  .start,
  .end {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: normal;
    font-size: 10px;
    .name {
      font-size: 10px;
    }
    .date {
      position: relative;
      color: #333;
      margin: 0 10px 0 3px;
      font-weight: 500;
    }
    .endicon::after {
      content: ' ';
      width: 0;
      height: 0;
      border: 4px solid #666;
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      bottom: 0px;
      right: -12px;
    }
  }
}
.content {
  position: relative;
  flex: 1;
  padding: 0 6px;
  text-align: left;
  border-left: 1px solid #fff;
  .keyword {
    max-width: 155px;
    font-size: 12px;
  }
}
.right {
  width: 24px;
  height: 24px;
  display: inline-block;
  background-image: url(/src/assets/img/home/home-sprite.png);
  background-position: -29px -151px;
  background-size: 207px 192px;
}
</style>
