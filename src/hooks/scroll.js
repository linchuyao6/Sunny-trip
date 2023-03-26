import { onMounted, onUnmounted } from 'vue'
import { ref } from 'vue'
import { throttle } from 'underscore'

console.log(throttle)
export default function useScroll() {
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReachBottom.value = true
    }
  }, 1000)

  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHandler)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })
  return { isReachBottom, clientHeight, scrollHeight, scrollTop }
}
