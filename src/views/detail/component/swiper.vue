<script setup>
const props = defineProps({
  housePic: {
    type: Array,
    default: () => [],
  },
})
const swiperGroup = {}
for (const item of props.housePic) {
  let valueArray = swiperGroup[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = []
    swiperGroup[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}

const nameReg = /【(.*?)】/i
// const getTitle = (title) => {
//   return title
//     .replace('【', '')
//     .replace('】', '')
//     .replace('：', '')
// }
const getTitle = (title) => {
  const result = nameReg.exec(title)
  return result[1]
}
const getIndex = (item) => {
  const valueArray = swiperGroup[item.enumPictureCategory]
  const data = valueArray.findIndex((data) => data === item) + 1
  return data
}
console.log(swiperGroup)
</script>

<template>
  <div id="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(value, key, index) in housePic">
        <img class="swiper_img" :src="value.url" alt="" />
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <!-- <div class="indicator">{{ active }}/{{ swipeData.length }}-{{ total }}</div> -->
        <div class="custom-indicator">
          <template v-for="(value, key, index) in swiperGroup" :key="key">
            <span
              class="item"
              :class="{ active: housePic[active]?.enumPictureCategory == key }"
            >
              <span class="text">{{ getTitle(value[0].title) }}</span>
              <span
                class="count"
                v-if="housePic[active]?.enumPictureCategory == key"
              >
                {{ getIndex(housePic[active]) }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.swiper_img {
  width: 100%;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  display: flex;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  .item {
    margin: 0 5px;
  }
  .active {
    padding: 0 3px;
    background-color: #fff;
    color: black;
    border-radius: 5px;
  }
}
</style>
