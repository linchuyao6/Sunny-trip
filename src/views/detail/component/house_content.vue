<script setup>
import detailSection from '@/components/detail_section/detail_section.vue'
defineProps({
  houseContent: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div id="content">
    <detailSection :title="'房屋设施'" :more-message="'查看全部设施'">
      <div class="house_content">
        <template v-for="(item, index) in houseContent.houseFacilitys">
          <div class="intro" v-if="houseContent.facilitySort?.includes(index)">
            <div class="left">
              <div class="left_icon">
                <img :src="item.icon" alt="" />
              </div>
              <div class="left_text">{{ item.groupName }}</div>
            </div>
            <div class="right">
              <template v-for="(item2, index2) in item.facilitys.slice(0, 4)">
                <div class="intro_item">
                  <div class="icon icon_check"></div>
                  {{ item2.name }}
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detailSection>
  </div>
</template>

<style lang="less" scoped>
.house_content {
  padding: 5px 0;
  border-radius: 6px;
  font-size: 12px;
  background-color: #f7f9fb;
  .intro {
    display: flex;
    margin: 25px 0;
    .left {
      width: 90px;
      text-align: center;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .intro_item {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 50%;
        margin: 4px 0;
      }
      .icon {
        margin: 0 6px;
      }
    }
  }
}
</style>
