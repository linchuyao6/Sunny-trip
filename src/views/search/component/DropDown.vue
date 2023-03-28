<script setup>
import { ref, watch } from 'vue'
import useSearchStore from '@/store/modules/search'
const searchStore = useSearchStore()
let labels = ref([])
let myoptions = ref([])
watch(searchStore, (newValue) => {
  const res = newValue.allConditions[1]?.items
  labels = res.map((item) => item.label)
  for (let i = 0; i < labels.length; i++) {
    let obj = {
      text: labels[i],
      value: i,
    }
    myoptions.value.push(obj)
  }
})

const value = ref(0)

// const onConfirm = () => {
//   item.value.toggle()
// }
const activeId = ref(1)
const activeIndex = ref(0)
const items = [
  {
    text: '浙江',
    children: [
      { text: '杭州', id: 1 },
      { text: '温州', id: 2 },
      { text: '宁波', id: 3, disabled: true },
    ],
  },
  {
    text: '江苏',
    children: [
      { text: '南京', id: 4 },
      { text: '无锡', id: 5 },
      { text: '徐州', id: 6 },
    ],
  },
  { text: '福建', disabled: true },
]
</script>

<template>
  <div id="dropDown">
    <van-dropdown-menu>
      <van-dropdown-item title="位置" ref="item1"> </van-dropdown-item>
      <van-dropdown-item v-model="value" :options="myoptions" />
      <van-dropdown-item title="筛选" ref="item2">
        <van-tree-select
          v-model:active-id="activeId"
          v-model:main-active-index="activeIndex"
          :items="items"
        />
      </van-dropdown-item>
    </van-dropdown-menu>

    {{ searchStore.allConditions[1]?.items }}
  </div>
</template>

<style lang="less" scoped></style>
