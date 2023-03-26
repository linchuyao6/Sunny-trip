<script setup>
import detailSection from '@/components/detail_section/detail_section.vue'
defineProps({
  landlordModule: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div id="master">
    <detailSection :title="'房东介绍'" :more-message="'查看房东主页'">
      <div class="masterIntro">
        <div class="top">
          <img :src="landlordModule.topScroll" alt="" />
        </div>
        <div class="hotelIntro">
          <div class="left">
            <img :src="landlordModule.hotelLogo" alt="" />
          </div>
          <div class="center">
            <div class="hotelName">{{ landlordModule.hotelName }}</div>
            <div class="tags">
              <template
                class="tags"
                v-for="(item, index) in landlordModule.hotelTags"
                :key="index"
              >
                <div class="Tag" :style="{ color: item.tagText.color }">
                  {{ item.tagText.text }}
                  <span
                    v-if="index !== landlordModule.hotelTags.length - 1"
                    class="divider"
                    >|</span
                  >
                </div>
              </template>
            </div>
          </div>
          <div class="right">
            <button>联系房东</button>
          </div>
        </div>
        <div class="bottom">
          <template v-for="(item, index) in landlordModule.hotelSummary">
            <div class="text_content">
              <span class="text_title">{{ item.title }}</span>
              <span class="score">{{ item.introduction }}</span>
              <span class="desc">{{ item.tip }}</span>
            </div>
          </template>
        </div>
      </div>
    </detailSection>
  </div>
</template>

<style lang="less" scoped>
.masterIntro {
  .top {
    img {
      width: 100%;
      border-radius: 3px;
    }
  }
  .hotelIntro {
    display: flex;

    align-items: center;
    margin-top: 10px;
    .left {
      img {
        height: 54px;
        width: 54px;
      }
    }
    .center {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin: 0 5px;
      .hotelName {
        margin-top: 8px;
        font-size: 16px;
        font-weight: 600;
      }
      .tags {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        .divider {
          margin: 0 2px;
        }
      }
    }
    .right {
      button {
        height: 24px;
        line-height: 24px;
        border-radius: 5px;
        padding: 0 12px;
        font-size: 12px;
        color: #fff;
        background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
        border: none;
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    margin: 50px 10px 10px;
    .text_content {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      .text_title {
        color: #999;
      }
      .score {
        margin: 5px 0;
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }
      .desc {
        color: #666;
      }
    }
  }
}
</style>
