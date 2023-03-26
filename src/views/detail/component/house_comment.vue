<script setup>
import detailSection from '@/components/detail_section/detail_section.vue'
const props = defineProps({
  comment: {
    type: Object,
    default: () => ({}),
  },
})
const value = props.comment.overall
</script>

<template>
  <div id="comment">
    <detailSection
      :title="'热门评论'"
      :more-message="`查看全部${comment.totalCount}条评论`"
    >
      <div class="hotComment">
        <div class="top">
          <div class="score">
            {{ comment.overall }}
            <div class="line"></div>
          </div>
          <div class="content">
            <span class="scoreTitle">{{ comment.scoreTitle }}</span>
            <span class="totalComment">{{ comment.totalCount }}条评论</span>
            <van-rate
              v-model="value"
              readonly
              allow-half
              color="var(--primary-color)"
              size="12px"
            />
          </div>
          <div class="detail">
            <template v-for="(item, index) in comment.subScores" :key="index">
              <div class="scoreTag">
                {{ item }}
              </div>
            </template>
          </div>
        </div>
        <div class="center">
          <template v-for="(item, index) in comment.commentTagVo">
            <div
              class="tag"
              :style="{
                color: item.color,
                backgroundColor: item.backgroundColor,
              }"
            >
              {{ item.text }}
            </div>
          </template>
        </div>
        <div class="bottom">
          <div class="user_info">
            <div class="left">
              <img :src="comment.comment.userAvatars" alt="" />
            </div>
            <div class="right">
              <div class="username">{{ comment.comment.userName }}</div>
              <div class="inDate">{{ comment.comment.checkInDate }}</div>
            </div>
          </div>
          <div class="desc">
            {{ comment.comment.commentDetail }}
          </div>
        </div>
      </div>
    </detailSection>
  </div>
</template>

<style lang="less" scoped>
.hotComment {
  padding: 10px 0px;
  .top {
    display: flex;
    .score {
      width: 65px;
      height: 100%;
      color: #333;
      position: relative;
      font-weight: 600;
      font-size: 48px;
      position: relative;
      z-index: 9;
      display: flex;
      flex-direction: column;
      align-items: center;
      .line {
        width: 66px;
        height: 6px;
        background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
        border-radius: 3px;
        position: absolute;
        bottom: 6px;
        z-index: 5;
      }
    }
    .content {
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      margin-left: 19px;
      font-size: 12px;
      color: #333;
      .totalComment {
        margin: 3px 0;
        color: #999;
      }
    }
    .detail {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      justify-content: flex-end;
      .scoreTag {
        margin-left: 5px;
        font-size: 12px;
        color: #666;
      }
    }
  }
  .center {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    .tag {
      padding: 3px 5px;
      margin-right: 8px;
      margin-top: 5px;
      border-radius: 8px;
      font-size: 12px;
    }
  }
  .bottom {
    padding: 10px;
    border-radius: 6px;
    background-color: #f7f9fb;
    .user_info {
      display: flex;
      .left {
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }
      .right {
        margin-left: 8px;
        .inDate {
          margin-top: 3px;
          font-size: 12px;
          color: #999;
        }
      }
    }
    .desc {
      font-size: 12px;
      line-height: 16px;
      color: #333;
      margin-top: 16px;
    }
  }
}
</style>
