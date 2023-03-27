<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, computed, watch } from 'vue'
import useDetail from '@/store/modules/detail'
import useScroll from '@/hooks/scroll'
import tabControl from '@/components/tabbar_control/tabbar_control.vue'
import swiper from './component/swiper.vue'
import infos from './component/infos.vue'
import content from './component/house_content.vue'
import houseMaster from './component/houseMaster.vue'
import comment from './component/house_comment.vue'
import userKnow from './component/userKnow.vue'
import addressMessage from './component/address.vue'
import priceDetail from './component/priceDetail.vue'

const houseDetail = useDetail()
const router = useRouter()
const route = useRoute()
const houseId = route.params.id
houseDetail.fetchDetail(houseId)
// 之前的方法是不对的，就是直接赋值：const mainPart=storeToRefs(houseDetail.mainPart)
const active = ref(0)
const mainRef = ref()

// 此时scrollTop不会失去响应式。
const { scrollTop } = useScroll(mainRef)
const scorllHeight = computed(() => {
  return scrollTop.value > 300
})
const sectionEls = ref({})
const names = computed(() => {
  return Object.keys(sectionEls.value)
})
const getSectionRef = (value) => {
  if (!value) return
  const name = value.$el.getAttribute('name')
  sectionEls.value[name] = value.$el
}
// 这个变量为了解决点击跳转时导航一直跳跃问题
let isClick = false
let currentDistance = -1
// 控制点击时滚动到相应位置
const changeTab = (index) => {
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]
  let distance = el.offsetTop
  if (index != 0) distance = distance - 44
  mainRef.value.scrollTo({
    top: distance,
    behavior: 'smooth',
  })
  isClick = true
  currentDistance = distance
}
// 先监听滚动事件
// 获取所有区域的offsetTop
const tabControlRef = ref()
// 拿到组件实例必须放在函数外面
watch(scrollTop, (newValue) => {
  // 这些只能放在函数调用中，放在外面时拿不到实例，因为还没有被挂载
  const els = Object.values(sectionEls.value)
  const values = els.map((el) => el.offsetTop)
  // 控制滚动时对应tab上的标签
  if (newValue === currentDistance) {
    isClick = false
  }
  if (isClick) return
  let index = values.length - 1
  for (let i = 0; i < values.length; i++) {
    if (values[i] > newValue + 44) {
      index = i - 1
      break
    }
  }

  // 这里直接改变子组件属性值的前提是在子组件中已经暴露过这个方法

  tabControlRef.value.currentIndex = index
})

const onClickLeft = () => {
  router.back()
}

// const changeTab = (index) => {
//   console.log(index)
// }
</script>

<template>
  <div id="detail" class="top-page" ref="mainRef">
    <tabControl
      :titles="names"
      @tab-item-click="changeTab"
      v-show="scorllHeight"
      ref="tabControlRef"
    ></tabControl>
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div
      class="main"
      v-memo="[houseDetail.mainPart]"
      v-if="houseDetail.mainPart.topModule?.housePicture?.housePics"
    >
      <swiper
        :housePic="houseDetail.mainPart.topModule.housePicture.housePics"
      ></swiper>
      <infos
        name="描述"
        :ref="getSectionRef"
        :house-info="houseDetail.mainPart.topModule"
      ></infos>

      <content
        name="设施"
        :ref="getSectionRef"
        :house-content="
          houseDetail.mainPart.dynamicModule.facilityModule.houseFacility
        "
      ></content>

      <houseMaster
        name="房东"
        :ref="getSectionRef"
        :landlordModule="houseDetail.mainPart.dynamicModule.landlordModule"
      ></houseMaster>

      <comment
        name="评论"
        :ref="getSectionRef"
        :comment="houseDetail.mainPart.dynamicModule.commentModule"
      ></comment>

      <userKnow
        name="须知"
        :ref="getSectionRef"
        :order="houseDetail.mainPart.dynamicModule.rulesModule.orderRules"
      ></userKnow>

      <addressMessage
        name="周边"
        :ref="getSectionRef"
        :position="houseDetail.mainPart.dynamicModule.positionModule"
      ></addressMessage>

      <priceDetail :price-detail="houseDetail.mainPart.introductionModule">
      </priceDetail>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="title">
        享受生活，晴天旅行
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style lang="less" scoped>
#detail {
  :deep(.van-nav-bar__title) {
    font-weight: normal;
  }
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;
    img {
      width: 127px;
    }
    .title {
      margin-top: 12px;
      font-size: 12px;
      color: #7688a7;
    }
  }
}
</style>
