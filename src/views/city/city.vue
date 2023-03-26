<script setup>
import SearchBar from './componet/search.vue'
import useCityStore from '@/store/modules/city'
import cityList from './componet/city-list.vue'
import hotCity from './componet/hot-city.vue'
import { ref } from 'vue'

const cityStore = useCityStore()
const activeName = ref('')
</script>

<template>
  <div id="city">
    <div class="top">
      <SearchBar />
      <van-tabs v-model:active="activeName" color="var(--primary-color)">
        <template
          v-for="(value, key, index) in cityStore.cityDate"
          :key="index"
        >
          <van-tab :title="value.title" :name="key">
            <!-- <h2>{{ value.title }}</h2> -->
          </van-tab>
        </template>
      </van-tabs>
    </div>
    <!-- 热门部分 -->
    <div class="content">
      <div class="hot">
        <div class="title">热门</div>
        <template
          v-for="(value, key, index) in cityStore.cityDate"
          :key="index"
        >
          <hotCity v-show="key === activeName" :hotCityData="value"></hotCity>
        </template>
      </div>
      <!-- 导航列表 -->
      <div class="list">
        <template
          v-for="(value, key, index) in cityStore.cityDate"
          :key="index"
        >
          <cityList v-show="key === activeName" :group-data="value"></cityList>
          <!-- {{ value }} -->
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#city {
  // 方案一:固定定位
  // margin-top: 98px;
  // .top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  // }
  // 方案二：布局滚动
  .top {
    position: relative;
    z-index: 9px;
  }
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}

.hot .title {
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
  border-bottom: 1px solid #fafafa;
}
</style>
