<script setup>
import useHomeStore from '@/store/modules/home'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import houseV9 from '@/components/house-item-v9/house-item-v9.vue'
import houseV3 from '@/components/house-item-v3/house-item-v3.vue'

const homeStore = useHomeStore()
const router = useRouter()
const { houseList } = storeToRefs(homeStore)
const gotoHouse = (houseId) => {
  router.push('/datail/' + houseId)
}
</script>

<template>
  <div id="homeContent">
    <div class="title">热门精选</div>
    <div class="list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <template v-if="item.discoveryContentType === 9">
          <houseV9
            :house-date="item.data"
            @click="gotoHouse(item.data.houseId)"
          ></houseV9>
        </template>
        <template v-else-if="item.discoveryContentType === 3">
          <houseV3
            :house-date="item.data"
            @click="gotoHouse(item.data.houseId)"
          ></houseV3>
        </template>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
#homeContent {
  padding: 10px 8px;
}
.title {
  font-size: 22px;
  padding: 10px;
}
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
