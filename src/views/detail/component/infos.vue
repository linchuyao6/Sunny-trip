<script setup>
const props = defineProps({
  houseInfo: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div id="infos">
    <div class="name">{{ houseInfo.houseName }}</div>
    <div class="tags">
      <template v-for="(value, index) in houseInfo.houseTags">
        <div
          class="tag"
          v-if="value.tagText"
          :style="{
            color: value.tagText.color,
            backgroundColor: value.tagText.background.color,
          }"
        >
          {{ value.tagText.text }}
        </div>
      </template>
    </div>
    <div class="comment grey_bar">
      <div class="left">
        <span class="score">{{ houseInfo.commentBrief.overall }}</span>
        <span class="text">{{ houseInfo.commentBrief.scoreTitle }}</span>
        <span class="commen">{{ houseInfo.commentBrief.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="totalCount"
          >{{ houseInfo.commentBrief.totalCount }}条评论</span
        >
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="address grey_bar">
      <div class="left">{{ houseInfo.nearByPosition.address }}</div>
      <div class="right">
        地图周边
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#infos {
  padding: 16px;
  background-color: #fff;
}
.name {
  font-weight: 700;
  font-size: 20px;
  color: #333;
  text-align: justify;
  line-height: 24px;
  overflow: hidden;
  margin-bottom: 6px;
}
.tags {
  display: flex;

  flex-wrap: wrap;
  .tag {
    font-size: 12px;
    margin: 2px 2px;
    padding: 1px 3px;
  }
}
.grey_bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  margin: 12px 0;
  border-radius: 5px;
  font-size: 12px;
  background-color: #f5f7fa;
  .left {
    .score {
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }
    .text {
      color: #333;
      font-weight: 700;
      margin: 0 3px;
    }
    .commen {
      color: #666;
    }
  }
  .right {
    color: var(--primary-color);
  }
}

.address {
  .left {
    font-size: 14px;
    font-weight: 700;
    color: #333;
    margin-right: 10px;
  }
  .right {
    display: flex;
    width: 72px;
  }
}
</style>
