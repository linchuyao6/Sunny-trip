<script setup>
import pinia from '@/store'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/store/modules/city'

const searchValue = ref()
const router = useRouter()

const onCancel = () => {
  router.back()
}
const cityStore = useCityStore()
cityStore.getAllCityData()
</script>

<template>
  <div id="search">
    <van-search
      v-model="searchValue"
      placeholder="城市/区域/位置"
      show-action
      shape="round"
      @cancel="onCancel"
    />
  </div>
</template>

<style lang="less" scoped>
#search {
  --van-search-left-icon-color: var(--primary-color);
}
</style>
