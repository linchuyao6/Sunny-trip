import { defineStore } from 'pinia'
import { fetchOrderList } from '@/services/modules/order'

const useOrderStore = defineStore('order', {
  state: () => ({
    allOrderList: {},
    pendOrderList: {},
    recentOrderList: {},
  }),
  actions: {
    async getAllOrderList() {
      const { data } = await fetchOrderList('all')
      this.allOrderList = data.data.data
    },
    async getPendOrderList() {
      const { data } = await fetchOrderList('pend')
      this.pendOrderList = data.data.data
    },
    async getRecentOrderList() {
      const { data } = await fetchOrderList('recent')
      this.recentOrderList = data.data.data
    },
  },
})

export default useOrderStore
