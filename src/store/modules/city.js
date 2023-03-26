import getCityAll from '@/services'
import { defineStore, storeToRefs } from 'pinia'

const useCityStore = defineStore('city', {
  state: () => ({
    cityDate: {},
    chooseCity: {
      cityName: '广州',
    },
  }),
  // state中的数据本身就是响应式的。
  actions: {
    async getAllCityData() {
      const res = await getCityAll()
      this.cityDate = res.data.data
      this.cityGroup = this.cityDate.cityGroup
      this.cityGroupOverSea = this.cityDate.cityGroupOverSea
    },
  },
})

export default useCityStore
