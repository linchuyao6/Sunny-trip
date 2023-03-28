<script setup>
import navBar from '@/components/nav-bar/nav-bar.vue'
import houseFavor from '@/components/house_favor/house_favor.vue'
import useFavorStore from '@/store/modules/favor'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const favorStore = useFavorStore()
const active = ref(0)
const titles = ['我的收藏', '浏览历史']
const activeName = ref('house')

favorStore.getFavorList()
</script>

<template>
  <div id="favor">
    <navBar>
      <template #title>
        <div class="title">
          <van-tabs v-model:active="active" type="card" shrink>
            <van-tab v-for="item in titles" :title="item"></van-tab>
          </van-tabs>
        </div>
      </template>
    </navBar>
    <div v-if="active === 0" class="favor">
      <van-tabs v-model:active="activeName">
        <van-tab title="房屋" name="house">
          <!-- 因为这个favorList会有一个默认[],但是其中的items是在异步发送完请求后才能获得的，
          所以可以先判断store中是否已经拿到了数据，等拿到数据后在进行数据传递 -->
          <div class="main" v-if="favorStore.favorList?.items">
            <template
              v-for="(items, index) in favorStore.favorList.items"
              :key="index"
            >
              <houseFavor :item="items"></houseFavor>
            </template>
            <!-- <houseFavor :item="favorStore.favorList.items[0]"></houseFavor> -->
          </div>
          <!-- <div class="content">
            <template v-for="(item, index) in favorlist">
              <search-list-item :item-data="item"></search-list-item>
            </template>
          </div> -->
        </van-tab>
        <van-tab title="房东" name="landlord">
          <!-- <div class="content">
            内容
            <div v-if="landlordlist.length" class="list"></div>

            <div v-else class="no-data">
              <img
                class="icon-no-data"
                src="@/assets/img/favor/empty_favorite.44731802.png"
                alt=""
              />
              <div class="name">暂无收藏</div>
              <div class="desp">
                点击
                <img src="@/assets/img/favor/favor.png" alt="" />
                即可收藏对应的房东
              </div>
              <button class="btn" @click="handleBtnClick">随便去逛逛</button>
            </div>
          </div> -->
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<style lang="less" scoped>
#favor {
  background-color: #f7f8fb;
}
.active {
}
.main {
  padding: 10px 20px 55px 20px;
}
</style>
