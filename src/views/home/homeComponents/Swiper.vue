<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="swiper-item" v-for="(item, index) in images" :key="index">
        <a :href="item.link">
          <img v-lazy="item.image">
        </a>
      </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload } from 'vant'
Vue.use(Swipe).use(SwipeItem).use(Lazyload)
export default {
  props: {
    images: Array,
    default() {
      return []
    }
  },
  name: "Swiper",
  
};
</script>

<style scoped>
.my-swipe {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.swiper-item img{
  width: 375px;
  height: 195px;
}
</style>