<script setup>
import useCityStore from '@/store/modules/city'
import useMainStore from '@/store/modules/main'
import { getSimpleDay } from '@/utils/format_date'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const cityStore = useCityStore()
const mainStore = useMainStore()

const { chooseCity } = storeToRefs(cityStore)
const nowDate = computed(() => {
  return getSimpleDay(mainStore.nowDate)
})
const nextDate = computed(() => {
  return getSimpleDay(mainStore.nextDate)
})
</script>

<template>
  <div id="searchBar">
    <div class="left">{{ chooseCity.cityName }}</div>
    <div class="center">
      <div class="start">
        <div class="name">住</div>
        <div class="date">{{ nowDate }}</div>
      </div>
      <div class="end">
        <div class="name">离</div>
        <div class="date endicon">{{ nextDate }}</div>
      </div>
    </div>
    <div class="right ellipsis-text-1">
      <span>搜索博尔塔拉的景点、地标、房源</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
#searchBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: var(--0ff99981-props_height);
  line-height: var(--0ff99981-props_height);
  padding: 0 10px;
  font-size: 14px;
  color: #999;
  border-radius: 6px;
  background: #f2f4f6;
  font-weight: normal;
}
.left {
  font-weight: 500;
  min-width: 30px;
  font-size: 14px;
  padding-right: 6px;
  margin-right: 5px;
  border-right: 1px solid #fff;
  color: #333;
  white-space: nowrap;
}
.center {
  display: flex;
  flex-direction: column;
  .start,
  .end {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 1.2;
    font-size: 10px;
    .name {
      font-size: 10px;
      font-weight: normal;
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
.right {
  position: relative;
  flex: 1;
  padding: 0 6px;
  text-align: left;
  border-left: 1px solid #fff;

  span {
    max-width: 155px;
    font-size: var(--0ff99981-props_keyWordFontSize);
  }
}
.ellipsis-text-1 {
  overflow: hidden;
  word-wrap: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
