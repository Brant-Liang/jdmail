<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>
import DetailNavBar from './detailComponents/DetailNabBar'
import DetailSwiper from './detailComponents/DeatilSwiper'

import { getDetailData } from 'network/detail.js'
export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages : []
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created() {
    // 保存iid
    this.iid = this.$route.params.iid
    this.DetailData()
    // 根据iid请求数据
  },
  methods: {
    DetailData() {
      getDetailData(this.iid).then(res=> {
        console.log(res);
        // 1、获取轮播图数据
        this.topImages = res.result.itemInfo.topImages
      })
    }
  }
};
</script>

<style>
</style>