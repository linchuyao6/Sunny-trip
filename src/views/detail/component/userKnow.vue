<script setup>
import detailSection from '@/components/detail_section/detail_section.vue'
defineProps({
  order: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div id="know">
    <detailSection :title="'预定须知'">
      <div class="userKnow">
        <template v-for="(item, index) in order" :key="index">
          <div class="tags" v-if="item.introduction">
            <div class="title">{{ item.title }}</div>
            <div class="intro">{{ item.introduction }}</div>
          </div>
        </template>
      </div>
    </detailSection>
  </div>
</template>

<style lang="less" scoped>
.tags {
  display: flex;
  margin: 10px 0 20px;
  font-size: 12px;
  .title {
    width: 64px;
    color: #666;
  }
  .intro {
    flex: 1;
    color: #333;
  }
}
</style>
