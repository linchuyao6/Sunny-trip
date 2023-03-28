import { defineStore } from 'pinia'
import { fetchFavorList } from '@/services/modules/favor'
const useFavorStore = defineStore('favor', {
  state: () => ({
    favorList: [],
  }),
  actions: {
    async getFavorList() {
      const { data } = await fetchFavorList()

      this.favorList = data.data.data
      console.log(this.favorList)
    },
  },
})

export default useFavorStore
