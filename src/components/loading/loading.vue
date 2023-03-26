<script setup>
import useMainStore from '@/store/modules/main'
const mainStore = useMainStore()
const changeIsLoading = () => {
  mainStore.isLoading = false
}
</script>

<template>
  <div class="loading" @click="changeIsLoading">
    <div class="bgc">
      <img src="@/assets/img/home/loading-bg.png" alt="" />
      <div class="pic">
        <img src="@/assets/img/home/full-screen-loading.gif" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.bgc {
  position: relative;
  img {
    height: 100px;
    width: 100px;
  }
  .pic {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      height: 70px;
      width: 70px;
      margin-bottom: 10px;
    }
  }
}
</style>
