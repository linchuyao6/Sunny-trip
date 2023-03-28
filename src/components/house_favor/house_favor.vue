<script setup>
defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div id="house_favor">
    <div class="pic">
      <img :src="item.pictureList[1]" alt="" />
      <!-- 分页器 -->
      <div class="score">
        <div class="left">{{ item.commentBriefForCD.overall }}分</div>
        <div class="right">{{ item.commentBriefForCD.scoreTitle }}</div>
      </div>
      <!-- 右上角小标签 -->
      <div class="right_icon">
        <div class="user_pic">
          <img :src="item.landlordHeadStyle.head" alt="" />
        </div>
        <div class="like">
          <img
            src="@/assets/img/search/tj-mob-ui_unit-item_collected-new.png"
            alt=""
          />
        </div>
        <div class="message">
          <img
            src="@/assets/img/search/tj-mob-ui_unit-item_comment-new.png"
            alt=""
          />
          <span class="count">{{ item.commentBriefForCD.totalCount }}</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="tags">
        <div class="address">{{ item.address }}</div>
        <div class="houseType">
          {{ item.unitSummeries[0].text }}·{{ item.unitSummeries[1].text }}
        </div>
      </div>
      <div class="house_name ellipsis-text-2">{{ item.unitName }}</div>
      <div class="prcie_priceTipBadge">
        <template v-for="(item1, index) in item.houseTags">
          <div
            class="cut_price"
            :style="{
              color: item1.color,
              backgroundColor: item1.background.color,
            }"
          >
            {{ item1.text }}
          </div>
        </template>
      </div>
      <div class="price">
        <div class="finalPrice">
          ¥<span>{{ item.finalPrice }}</span>
        </div>
        <div class="truePrice">¥{{ item.productPrice }}</div>
        <div class="discount" v-if="item.priceTipBadge">
          <i class="icon"></i>
          {{ item.priceTipBadge.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#house_favor {
  margin: 10px 0;
  .pic {
    position: relative;
    img {
      width: 100%;
      border-radius: 6px;
      margin-bottom: 7px;
    }
    .score {
      position: absolute;
      bottom: 15px;
      left: 10px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      max-width: 55%;
      height: 17px;
      padding-left: 6px;
      border-radius: 10px;
      background-color: hsla(0, 0%, 100%, 0.9);
      .left {
        font-size: 14px;
        transform: scale(0.8);
        transform-origin: 0 center;
        color: #333;
      }
      .right {
        position: relative;
        font-size: 12px;
        transform: scale(0.8);
        transform-origin: 0 center;
        margin-left: -2px;
        padding-left: 5px;
        font-weight: bolder;
        color: #666;
        &::before {
          content: ' ';
          left: 0;
          top: 2px;
          position: absolute;
          height: 10px;
          width: 1px;
          background-color: #dadada;
        }
      }
    }

    .right_icon {
      position: absolute;
      top: 10px;
      right: 10px;
      .user_pic {
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-top: 5px;
          margin-bottom: 0;
        }
      }
      .like {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        img {
          width: 30px;
          height: 30px;
          margin-bottom: 0;
        }
      }
      .message {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        color: #fff;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .content {
    .tags {
      display: flex;
      .address {
        color: rgb(255, 255, 255);
        background: rgb(63, 73, 84);
        font-size: 12px;
        line-height: 16px;
        border-radius: 2px;
      }
      .houseType {
        position: relative;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 12px;
        white-space: nowrap;
        color: #666;
      }
    }
    .house_name {
      line-height: 22px;
      font-size: 18px;
      margin-top: 8px;
      font-weight: 500;
    }
    .prcie_priceTipBadge {
      display: flex;
      margin-top: 7px;
      .cut_price {
        margin-right: 6px;
        font-size: 12px;
        line-height: 16px;
        border-radius: 2px;
      }
    }
    .price {
      display: flex;
      margin-top: 3px;
      margin-bottom: 7px;
      font-size: 14px;
      padding-right: 3px;
      color: #ff9645;
      align-items: flex-end;

      .finalPrice {
        span {
          position: relative;
          top: 1px;
          font-size: 20px;
          padding-right: 10px;
          padding-left: 1px;
        }
      }

      .truePrice {
        font-weight: 500;
        font-size: 12px;
        color: #999;
        text-decoration: line-through;
        padding-right: 5px;
      }
      .discount {
        color: rgb(255, 255, 255);
        background: rgb(251, 74, 74);
        position: relative;
        font-size: 12px;
        transform: scale(0.9);
        border-radius: 10px;
        line-height: 16px;
        height: 16px;
        padding: 0 4px;
        .icon {
          margin-right: 5px;
          display: inline-block;
          width: 10px;
          height: 10px;
          background-image: url(https://fe.tujiacdn.com/pwa/static/fevueui/images/unit-item-m/icon-unit-sound.png);
          background-size: 10px 10px;
          background-repeat: no-repeat;
          background-position: 50%;
        }
      }
    }
  }
}
</style>
