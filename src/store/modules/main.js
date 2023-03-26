import { defineStore } from 'pinia'

const nowDate = new Date()
const nextDate = new Date()
nextDate.setDate(nextDate.getDate() + 1)

const useMainStore = defineStore('main', {
  state: () => ({
    token: '',
    nowDate: nowDate,
    nextDate: nextDate,
    isLoading: false,
  }),
})

export default useMainStore
