<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div
        class="tab-control-item"
        :class="{ active: index === currentIndex }"
        @click="itemClick(index)"
      >
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<!-- <script>
export default {
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  emits: ['tabItemClick'],
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabItemClick', index)
    },
    setCurrentIndex(index) {
      this.currentIndex = index
    },
  },
}
</script> -->
<script setup>
import { ref } from 'vue'

defineProps({
  titles: {
    type: Array,
    default: () => [],
  },
})
// 这里将属性暴露出去，父组件可以直接拿到子组件的实例改变其属性

const emit = defineEmits(['tabItemClick'])

const currentIndex = ref(0)
const itemClick = (index) => {
  currentIndex.value = index
  emit('tabItemClick', currentIndex.value)
}
defineExpose({
  currentIndex,
})
</script>
<style lang="less" scoped>
.tab-control {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item.active {
  color: var(--primary-color);
  font-weight: 700;
}

.tab-control-item.active span {
  border-bottom: 3px solid var(--primary-color);
  padding: 8px;
}
</style>
