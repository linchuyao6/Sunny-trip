<template>
  <div id="home">
    <navBar></navBar>
    <img src="@/assets/img/home/banner.webp" class="bannr_img" />
    <Search />
    <searchBar></searchBar>
    <categories />
    <homeContent />
  </div>
</template>

<script setup>
import navBar from './componnt/navBar.vue'
import homeContent from './componnt/homeContent.vue'
import Search from './componnt/homeSearch.vue'
import useHomeStore from '@/store/modules/home'
import categories from './componnt/categories.vue'
import useScroll from '@/hooks/scroll'
import searchBar from '@/components/searchBar/searchBar.vue'
import { watch, computed } from 'vue'

const homeStore = useHomeStore()
homeStore.houseList = []
// 在当前组件被创建时请求并拿到数据
homeStore.fetchHotSuggestion()
homeStore.fetchCategories()
homeStore.fetchHouseList()

const { isReachBottom, scrollTop } = useScroll()
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
</script>

<style lang="less" scoped>
#home {
  margin-bottom: 60px;
}

.bannr_img {
  width: 100%;
}
</style>
