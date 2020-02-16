<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>
import DetailNavBar from './detailComponents/DetailNabBar'
import DetailSwiper from './detailComponents/DeatilSwiper'

import { getDetailData, Goods } from 'network/detail.js'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages : [],
      goods: null
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper
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
      })
    }
  }
};
</script>

<style>
</style>