<script setup>
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'
import useDetail from '@/store/modules/detail'
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

location.reload
const onClickLeft = () => {
  router.back()
}
</script>

<template>
  <div id="detail" class="top-page">
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div
      class="main"
      v-if="houseDetail.mainPart.topModule?.housePicture?.housePics"
    >
      <swiper
        :housePic="houseDetail.mainPart.topModule.housePicture.housePics"
      ></swiper>
      <infos name="描述" :house-info="houseDetail.mainPart.topModule"></infos>
      <content
        name="设施"
        :house-content="
          houseDetail.mainPart.dynamicModule.facilityModule.houseFacility
        "
      ></content>
      <houseMaster
        name="房东"
        :landlordModule="houseDetail.mainPart.dynamicModule.landlordModule"
      ></houseMaster>
      <comment
        name="评论"
        :comment="houseDetail.mainPart.dynamicModule.commentModule"
      ></comment>
      <userKnow
        name="须知"
        :order="houseDetail.mainPart.dynamicModule.rulesModule.orderRules"
      ></userKnow>
      <addressMessage
        name="周边"
        :position="houseDetail.mainPart.dynamicModule.positionModule"
      ></addressMessage>
      <priceDetail :price-detail="houseDetail.mainPart.introductionModule">
      </priceDetail>
    </div>
  </div>
  <!-- </div> -->
</template>

<style lang="less" scoped>
#detail {
  :deep(.van-nav-bar__title) {
    font-weight: normal;
  }
}
</style>
