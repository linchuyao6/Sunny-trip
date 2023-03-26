<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
    </router-view>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

    <!-- 这里用来控制是否显示tabbar -->
    <tabbar v-if="!route.meta.hideTabBar" />
    <loading v-show="mainStore.isLoading" />
  </div>
</template>

<script setup>
import tabbar from './components/tabbar/tabbar.vue'
import { useRoute } from 'vue-router'
import loading from '@/components/loading/loading.vue'
import useMainStore from '@/store/modules/main'
const route = useRoute()
const mainStore = useMainStore()
</script>
<style scoped></style>
