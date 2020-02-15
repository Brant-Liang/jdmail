<template>
  <van-swipe class="detail-swiper" :autoplay="3000" >
      <van-swipe-item v-for="(item, index) in topImages" :key="index">
          <img :src="item">
      </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload } from 'vant'
Vue.use(Swipe).use(SwipeItem).use(Lazyload)
export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.swiper-item img{
  height: 400px;
  width: 375px;
}
</style>