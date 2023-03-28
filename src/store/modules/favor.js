import { defineStore } from 'pinia'
import { fetchFavorList, fetchHistory } from '@/services/modules/favor'
const useFavorStore = defineStore('favor', {
  state: () => ({
    favorList: [],
    favorHistory: [],
  }),
  actions: {
    async getFavorList() {
      const { data } = await fetchFavorList()

      this.favorList = data.data.data
    },
    async getFavorHistory() {
      const { data } = await fetchHistory()
      this.favorHistory = data.data.data
    },
  },
})

export default useFavorStore
