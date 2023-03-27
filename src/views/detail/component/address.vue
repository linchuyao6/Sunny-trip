<script setup>
import detailSection from '@/components/detail_section/detail_section.vue'
import { ref, onMounted } from 'vue'

const props = defineProps({
  position: {
    type: Object,
    default: () => ({}),
  },
})

const mapRef = ref()
onMounted(() => {
  var map = new BMapGL.Map(mapRef.value) // 创建Map实例
  map.centerAndZoom(
    new BMapGL.Point(props.position.longitude, props.position.latitude),
    15
  ) // 初始化地图,设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
  var marker1 = new BMapGL.Marker(
    new BMapGL.Point(props.position.longitude, props.position.latitude)
  )

  // 在地图上添加点标记
  map.addOverlay(marker1)
})
</script>

<template>
  <div id="address">
    <detailSection :title="'位置周边'" :more-message="'查看更多周边信息'">
      <div class="myMap" ref="mapRef"></div>
    </detailSection>
  </div>
</template>

<style lang="less" scoped>
.myMap {
  height: 250px;
}
</style>
