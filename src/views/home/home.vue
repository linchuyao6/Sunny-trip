<template>
  <div id="home" ref="homeRef">
    <navBar></navBar>
    <img src="@/assets/img/home/banner.webp" class="bannr_img" />
    <Search />
    <div class="searchBar" v-if="showBar">
      <searchBar></searchBar>
    </div>
    <categories />
    <homeContent />
  </div>
</template>
<script>
export default { name: 'home' }
</script>
<script setup>
import navBar from './componnt/navBar.vue'
import homeContent from './componnt/homeContent.vue'
import Search from './componnt/homeSearch.vue'
import useHomeStore from '@/store/modules/home'
import categories from './componnt/categories.vue'
import useScroll from '@/hooks/scroll'
import searchBar from '@/components/searchBar/searchBar.vue'
import { watch, computed, ref, onActivated } from 'vue'

const homeStore = useHomeStore()
homeStore.houseList = []
// 在当前组件被创建时请求并拿到数据
homeStore.fetchHotSuggestion()
homeStore.fetchCategories()
homeStore.fetchHouseList()

const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)

watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseList().then(() => {
      isReachBottom.value = false
    })
  }
})
const showBar = computed(() => {
  return scrollTop.value >= 100
})
onActivated(() => {
  homeRef.value.scrollTo({
    top: scrollTop.value,
  })
})
</script>

<style lang="less" scoped>
#home {
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 60px;
  box-sizing: border-box;
}

.bannr_img {
  width: 100%;
}
</style>
