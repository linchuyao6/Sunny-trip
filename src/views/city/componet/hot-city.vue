<script setup>
import router from '@/router'
import useCityStore from '@/store/modules/city'
const cityStore = useCityStore()

const props = defineProps({
  hotCityData: {
    type: Object,
    default: () => {},
  },
})
const chooseCity = (item) => {
  cityStore.chooseCity = item
  router.back()
  console.log('chose')
}
console.log(props.hotCityData)
</script>

<template>
  <div id="hotCity">
    <template v-for="(item, index) in props.hotCityData.hotCities">
      <div class="item" @click="chooseCity(item)">
        {{ item.cityName }}
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
#hotCity {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  .item {
    width: 70px;
    height: 28px;
    text-align: center;
    border-radius: 14px;
    line-height: 28px;
    font-size: 12px;
    background-color: #fff4ec;
    margin: 6px;
  }
}
</style>
