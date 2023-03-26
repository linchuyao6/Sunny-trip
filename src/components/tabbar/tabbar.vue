<script setup>
import { ref, watchEffect } from 'vue'

import data from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils/load_assets'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentActive = ref(0)
watchEffect(() => {
  const index = data.findIndex((item) => item.path === route.path)
  if (index === -1) return
  currentActive.value = index
})
</script>

<template>
  <div id="tabbar">
    <van-tabbar v-model="currentActive" active-color="var(--primary-color)">
      <van-tabbar-item
        icon="search"
        v-for="(item, index) in data"
        :key="item.id"
        :to="item.path"
      >
        <span>{{ item.text }}</span>
        <template #icon>
          <img
            class="icon-image"
            :src="
              index === currentActive
                ? getAssetURL(item.ImageActive)
                : getAssetURL(item.Image)
            "
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
#tabbar {
  .icon-image {
    height: 26px;
  }

  --van-tabbar-item-font-size: 16px !important;
}
</style>
