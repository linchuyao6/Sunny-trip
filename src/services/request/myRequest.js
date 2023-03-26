import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import useMainStore from '@/store/modules/main'
const mainStore = useMainStore()

class myRequire {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT,
    })
    // 请求拦截器中处理
    this.instance.interceptors.request.use(
      (config) => {
        mainStore.isLoading = true
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        mainStore.isLoading = false
        return config
      },
      (err) => {
        mainStore.isLoading = false
        return err
      }
    )
  }

  async request(config) {
    try {
      const res = await this.instance.request(config)
    } catch (err) {
      console.log(err)
    }
  }
  get(config) {
    return this.instance.request({
      ...config,
      method: 'GET',
    })
  }
  post(config) {
    return this.instance.request({
      ...config,
      method: 'POST',
    })
  }
}
export default new myRequire('')
