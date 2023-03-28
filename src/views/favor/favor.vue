<script setup>
import navBar from '@/components/nav-bar/nav-bar.vue'
import houseFavor from '@/components/house_favor/house_favor.vue'
import useFavorStore from '@/store/modules/favor'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const favorStore = useFavorStore()
const active = ref(0)
const titles = ['我的收藏', '浏览历史']
const activeName = ref('house')

favorStore.getFavorList()
favorStore.getFavorHistory()
const gotoHome = () => {
  router.push('/home')
}
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
    <!-- 我的收藏 -->
    <div v-if="active === 0" class="myfavor">
      <van-tabs v-model:active="activeName">
        <van-tab title="房屋" name="house">
          <!-- 因为这个favorList会有一个默认[],但是其中的items是在异步发送完请求后才能获得的，
          所以可以先判断store中是否已经拿到了数据，等拿到数据后在进行数据传递 -->
          <div class="content" v-if="favorStore.favorList?.items">
            <template
              v-for="(items, index) in favorStore.favorList.items"
              :key="index"
            >
              <houseFavor :item="items"></houseFavor>
            </template>
          </div>
        </van-tab>
        <van-tab title="房东" name="landlord">
          <div class="content houseMaster">
            <div class="icon_pic">
              <img
                src="@/assets/img/favor/empty_favorite.44731802.png"
                alt=""
              />
            </div>
            <h3>暂无收藏</h3>
            <div class="tips">
              点击
              <img src="@/assets/img/favor/favor.png" alt="" class="icon" />
              即可收藏对应的房东
            </div>
            <div class="goHome" @click="gotoHome">
              随便去逛逛
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 浏览历史 -->
    <div v-else class="history">
      <div class="content" v-if="favorStore.favorHistory?.items">
        <template
          v-for="(items, index) in favorStore.favorHistory.items"
          :key="index"
        >
          <houseFavor :item="items"></houseFavor>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#favor {
  background-color: #f7f8fb;
  height: 100vh;
}
.active {
}
.content {
  padding: 10px 20px 55px 20px;
}
.houseMaster {
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon_pic {
    img {
      width: 100%;
    }
  }
  h3 {
    color: #333;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
  }
  .tips {
    color: #666;
    line-height: 18px;
    font-size: 14px;
    margin: 7px auto 36px;
    display: flex;
    flex: flex-end;
    .icon {
      padding: 4px;

      width: 12px;
      height: 12px;
    }
  }
  .goHome {
    padding: 0 38px;
    height: 40px;
    line-height: 40px !important;
    font-size: 16px;
    color: #fff;
    background: var(--primary-color);
    border-radius: 20px;
    border: none;
    outline: none;
  }
}
</style>
