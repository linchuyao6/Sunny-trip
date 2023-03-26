<script setup>
import router from '@/router'
import useCityStore from '@/store/modules/city'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
const cityStore = useCityStore()

const group = storeToRefs()
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
})

const chooseCity = (item) => {
  cityStore.chooseCity = item
  // console.log('ccc')
  router.back()
}
// 计算属性，拿到侧边栏导航
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group)
  return list
})
</script>

<template>
  <div id="cityList">
    <div class="content">
      <!-- {{ groupData.cities }} -->
      <van-index-bar :index-list="indexList" :sticky="false">
        <template v-for="(item, index) in groupData.cities" :key="index">
          <van-index-anchor :index="item.group" />

          <template v-for="(value, key, indey) in item.cities" :key="indey">
            <van-cell
              :title="value.cityName"
              @click="chooseCity(value)"
            ></van-cell>
          </template>
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
