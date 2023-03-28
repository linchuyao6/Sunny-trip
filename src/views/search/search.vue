<script setup>
import navBar from '@/components/nav-bar/nav-bar.vue'
import searchBar from './component/searchbar.vue'
import useSearchStore from '@/store/modules/search'
import DropDown from './component/DropDown.vue'

const searchStore = useSearchStore()
searchStore.getAllConditions()
</script>

<template>
  <div id="search">
    <nav-bar class="" :border="false">
      <template #title>
        <searchBar></searchBar>
      </template>
    </nav-bar>
    <div class="main" v-if="searchStore.allConditions">
      <DropDown></DropDown>
    </div>
  </div>
</template>

<style lang="less" scoped>
#search {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: #fff;
}
</style>
