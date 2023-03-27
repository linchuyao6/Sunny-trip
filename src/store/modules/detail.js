import { defineStore } from 'pinia'
import getDetail from '@/services/modules/detail'
const useDetail = defineStore('detail', {
  state: () => ({
    Detail: {},
    mainPart: {},
  }),
  actions: {
    async fetchDetail(houseId) {
      this.Detail = {}
      this.mainPart = {}
      const { data } = await getDetail(houseId)
      this.Detail = data.data
      if (this.Detail) {
        this.mainPart = this.Detail.mainPart
      }
    },
  },
})
export default useDetail
