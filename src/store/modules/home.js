import { defineStore } from 'pinia'
import {
  getHotSuggestions,
  getCategories,
  getHouseList,
} from '@/services/modules/home'

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggestion: {},
    categories: {},
    houseList: [],
    currentPage: 1,
  }),
  actions: {
    async fetchHotSuggestion() {
      const { data } = await getHotSuggestions()
      this.hotSuggestion = data
    },
    async fetchCategories() {
      const { data } = await getCategories()
      this.categories = data
    },
    async fetchHouseList() {
      const { data } = await getHouseList(this.currentPage)
      this.houseList.push(...data.data)
      this.currentPage++
      console.log(this.houseList)
    },
  },
})
export default useHomeStore
