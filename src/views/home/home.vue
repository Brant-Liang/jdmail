<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <Swiper></Swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import { getMultiDate } from 'network/home'
export default {
  name: 'Home',
  data() {
    return {
      banners: null,
      recommends: null
    }
  },
  components: {
    NavBar,
    Swiper
  },
  created() {
    getMultiDate().then(res => {
      console.log(res);
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }

</style>