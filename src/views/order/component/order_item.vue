<script setup>
import { computed, ref } from 'vue'
import { formatDate } from '@/utils/format_date'
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
})
const toPay = computed(() => {
  return props.data.orderStatusDesc === '待支付'
})

const toweek = (date) => {
  let datelist = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return datelist[new Date(date).getDay()]
}
const MinuTime = ref(0)
let counter = 1
const setTime = setInterval(() => {
  MinuTime.value = parseInt((props.data.countdown - counter) / 60)
  counter++
  if (MinuTime.value <= 0) {
    clearInterval(setTime)
    return
  }
}, 1000)
</script>

<template>
  <div id="order_item">
    <div class="top">
      <div class="title ellipsis-text-1">{{ data.unitName }}</div>
      <div class="status" v-if="toPay">{{ data.orderStatusDesc }}</div>
      <div class="canel" v-else>
        <span class="quxiao">{{ data.orderStatusDesc }}</span>
        <span class="overtime"> {{ data.cancelReasonDesc }}</span>
      </div>
    </div>
    <div class="content">
      <img :src="data.unitPicture" alt="" />
      <div class="grey_bar">
        <div class="left">
          <div class="fir_time">
            <div class="data">{{ formatDate(data.checkInDate) }}</div>
            <div class="week">
              <span>{{ toweek(data.checkInDate) }}</span>
              <span>{{ data.checkInLatestTime }}</span>
            </div>
          </div>
          <img
            class="arrow"
            src="/src/assets/img/order/icon_right_orderlist.png"
            data-v-739da086=""
          />
          <div class="last_time">
            <div class="data">{{ formatDate(data.checkOutDate) }}</div>
            <div class="week">
              <span>{{ toweek(data.checkOutDate) }}</span>
              <span>{{ data.checkOutLatestTime }}</span>
            </div>
          </div>
          <div class="right">
            <div class="total_price">
              支付总价
            </div>
            <div class="price">¥{{ data.prepayAmount }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom" v-if="toPay">
      <div class="time">
        <img
          class="icon-time"
          src="/src/assets/img/order/icon-time.png"
          alt=""
          data-v-1bf4109a=""
        />
        <span class="minute">{{ MinuTime }}分</span>后订单自动取消
      </div>
      <div class="btn">
        <div class="master ">联系房东</div>
        <div class="topay">去支付</div>
      </div>
    </div>
    <div class="canelBottom bottom" v-else>
      <div class="canel btn2">删除</div>
      <div class="twicePay btn2">再次预定</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#order_item {
  padding: 0 20px;
  margin-top: 10px;
  background-color: white;
}
.top {
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .title {
    max-width: 204px;
    font-size: 12px;
    color: #333;
    line-height: 12px;
  }
  .quxiao {
    color: rgb(178, 178, 178);
    font-size: 18px;
  }
  .overtime {
    position: relative;
    left: -5px;
    font-size: 12px;
    color: #b2b2b2;
  }
  .status {
    color: rgb(255, 150, 69);
    font-size: 18px;
  }
}

.content {
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }
  .grey_bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background: rgba(9, 10, 14, 0.7);
    border-radius: 0 0 6px 6px;
    display: flex;
    align-items: center;
    color: #fff;

    .left {
      display: flex;
      align-items: center;
      .fir_time,
      .last_time {
        display: flex;
        flex-direction: column;
        padding: 0 18px;
      }
      .arrow {
        width: 16px;
        height: 12px;
        line-height: 37px;
      }
      .data {
        padding: 0;
        margin: 0;
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 6px;
      }
      .week {
        font-size: 12px;
        text-align: center;
        line-height: 12px;
        opacity: 0.8;
      }
    }
    .right {
      position: relative;
      width: 105px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -8px;
        width: 1px;
        height: 40px;
        background-color: white;
      }
      .total_price {
        text-align: center;
        line-height: 12px;
        opacity: 0.8;
        margin: 0;
        transform: scale(0.9);
      }
      .price {
        margin-top: 5px;
        font-size: 16px;
        color: var(--primary, #ff9645);
        letter-spacing: 0;
        text-align: right;
        line-height: 16px;
      }
    }
  }
}
.bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  .time {
    color: #666;
    letter-spacing: 0;
    line-height: 11px;
    font-size: 11px;
    img {
      width: 11px;
      height: 11px;
      margin-right: 3px;
    }
    .minute {
      color: var(--primary-color);
      letter-spacing: 0;
      margin-right: 1px;
    }
  }
  .btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    .master {
      display: inline-block;
      text-align: center;
      line-height: 30px;
      margin-left: 10px;
      font-size: 14px;
      min-width: 75px;
      color: #666;
      background: #fff;
      border: 1px solid #e9e9e9;
      border-radius: 6px;
    }
    .topay {
      display: inline-block;
      text-align: center;
      line-height: 30px;
      margin-left: 10px;
      font-size: 14px;
      min-width: 75px;
      border-radius: 6px;
      color: white;
      background-color: var(--primary-color, #ff9645);
      border: 1px solid var(--primary-color, #ff9645);
    }
  }
}
.canelBottom {
  .btn2 {
    display: inline-block;
    text-align: center;
    line-height: 30px;
    margin-left: 10px;
    font-size: 14px;
    min-width: 75px;
    color: #666;
    background: #fff;
    border: 1px solid #e9e9e9;
    border-radius: 6px;
  }
  .twicePay {
    color: var(--primary-color, #ff9645);
    background-color: #fff;
    border: 1px solid var(--primary-color, #ff9645);
  }
}
</style>
