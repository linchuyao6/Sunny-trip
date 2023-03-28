import { defineStore } from 'pinia'
import { fetchSearchResaul, fetchSearchTop } from '@/services/modules/search'
const useSearchStore = defineStore('search', {
  state: () => ({
    allConditions: [],
  }),
  actions: {
    async getAllConditions() {
      const { data } = await fetchSearchTop()
      this.allConditions = data.data.data.allConditions
      console.log(this.allConditions)
    },
  },
})

export default useSearchStore
