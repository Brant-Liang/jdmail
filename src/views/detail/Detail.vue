<template>
  <div id="detail">
    <detail-nav-bar/>
    <better-scroll class="content">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shopInfo"/>
    </better-scroll>
  </div>
</template>

<script>
import DetailNavBar from './detailComponents/DetailNabBar'
import DetailSwiper from './detailComponents/DeatilSwiper'
import DetailBaseInfo from './detailComponents/DetailBaseInfo'
import DetailShopInfo from './detailComponents/DetailShopInfo'
import BetterScroll from 'components/common/betterScroll/BetterScroll'
import { getDetailData, Goods } from 'network/detail.js'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages : [],
      goods: null,
      shopInfo: null
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    BetterScroll
  },
  created() {
    // 保存iid
    this.iid = this.$route.params.iid
    // 根据iid请求数据
    this.DetailData()
  },
  methods: {
    DetailData() {
      getDetailData(this.iid).then(res=> {
        console.log(res);
        // 1、获取轮播图数据
        const data = res.result
        this.topImages = res.result.itemInfo.topImages
        // 2、 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // 3、获取店铺信息
        this.shopInfo = data.shopInfo
      })
    }
  }
};
</script>

<style>
#detail {
  height: 100vh;
  position: relative;
  background-color: #ffffff;
  z-index: 1;
}
.content {
  background-color: #ffffff;
  height: calc(100% - 44px);
}
</style>