import { defineStore } from 'pinia'
import getDetail from '@/services/modules/detail'
const useDetail = defineStore('detail', {
  state: () => ({
    Detail: {},
    mainPart: {},
  }),
  actions: {
    async fetchDetail(houseId) {
      const { data } = await getDetail(houseId)
      this.Detail = data.data
      // this.mainPart = this.Detail.mainPart\
      this.mainPart = data.data.mainPart
      console.log(this.mainPart)
    },
  },
})
export default useDetail
