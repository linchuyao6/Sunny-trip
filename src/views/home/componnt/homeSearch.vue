<script setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import useCityStore from '@/store/modules/city'
import useHomeStore from '@/store/modules/home'
import useMainStore from '@/store/modules/main'

import { getDiffDays, formatDate } from '@/utils/format_date'

const mainStore = useMainStore()

const router = useRouter()
const cityStore = useCityStore()
const homeStore = useHomeStore()

const show = ref(false)
const startDay = computed(() => {
  return formatDate(mainStore.nowDate)
})
const endDay = computed(() => {
  return formatDate(mainStore.nextDate)
})
const totalDay = ref(1)
// 数据是响应式的，最开始确实得不到数据，但是当异步函数执行完后就能渲染并拿到想要数据
const { hotSuggestion } = storeToRefs(homeStore)
const gotoCity = () => {
  router.push('/city')
}
const getUserLocation = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log('获取位置成功！' + res)
    },
    (err) => {
      console.log('获取位置失败！' + err)
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  )
}
const chooseDate = () => {
  show.value = true
}
const onConfirm = (values) => {
  const [start, end] = values
  show.value = false
  mainStore.nowDate = start
  mainStore.nextDate = end
  totalDay.value = getDiffDays(start, end)
}
console.log(hotSuggestion.value)
</script>

<template>
  <div id="search">
    <div class="user-position">
      <div class="city" @click="gotoCity">
        {{ cityStore.chooseCity?.cityName }}
      </div>
      <div class="position" @click="getUserLocation">
        <div class="text">
          我的位置
        </div>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期选择 -->
    <div class="date" @click="chooseDate">
      <div class="start">
        <span>入住</span>
        <div class="realDate">{{ startDay }}</div>
      </div>
      <span class="total">共{{ totalDay }}晚</span>
      <div class="end">
        <span>离店</span>
        <div class="realDate">{{ endDay }}</div>
      </div>
    </div>
    <van-calendar
      v-model:show="show"
      type="range"
      @confirm="onConfirm"
      color="var(--primary-color)"
      :style="{ height: '100%' }"
      :round="false"
    />
    <!-- price -->
    <div class="price_person">
      <div class="left">价格不限</div>
      <div class="right">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="key_words">
      <span>关键字/位置/民宿名</span>
    </div>
    <!-- 推荐 -->
    <div class="suggestion">
      <template v-for="(item, index) in hotSuggestion.data" :key="index">
        <div class="sugg-item">
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <!-- 搜索按钮 -->
    <div class="search_btn">
      <button>开始搜索</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
#search {
  background-color: #f7f8fb;
  padding: 0 20px;
  .price_person {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    color: #999;
    .right {
      padding-right: 20px;
    }
  }
}

.user-position {
  display: flex;

  height: 45px;
  justify-content: space-between;
  align-items: center;
  .city {
    font-size: 15px;
    color: #333;
  }
  .position {
    display: flex;
    align-items: center;
    .text {
      font-size: 12px;
      color: #666;
      line-height: 45px;
    }
    img {
      width: 18px;
      height: 18px;
      margin-left: 6px;
    }
  }
}
.date {
  display: flex;
  height: 45px;
  justify-content: space-between;
  .realDate {
    margin-top: 3px;
    color: #333;
    font-size: 15px;
    font-weight: 500;
  }
  span {
    font-size: 12px;
    color: #999;
  }
  .end {
    padding-right: 20px;
  }
  .total {
    font-size: 12px;
    color: #666;
    line-height: 30px;
  }
}
.key_words {
  height: 45px;
  line-height: 45px;
  color: #999;
}
.suggestion {
  display: flex;
  flex-wrap: wrap;
  padding-right: 20px;
  .sugg-item {
    font-size: 12px;
    padding: 4px 8px;
    margin: 3px;
    border-radius: 14px;
    color: #3f4954;
    background-color: #f1f3f5;
  }
  margin: 10px 0;
}

.search_btn {
  button {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    border: none;
    background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
  }
}
</style>
