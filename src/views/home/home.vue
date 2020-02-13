<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <better-scroll class="content" 
                  ref="scroll" 
                  :probe-type="3" 
                  @scroll="contentScroll"
                  :pull-up-load="true"
                  @pullingUp="loadMore"
    >
        <swiper :images="banners" />
        <home-recommand :recommands="recommends" />
        <feature-view class="feature" />
        <tab-control @tabClick="tabClick" class="tab-control" :titles="titles" />
        <good-list :goods="showGoods" />
    </better-scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import swiper from "./homeComponents/Swiper";
import HomeRecommand from "./homeComponents/homeRecommand";
import FeatureView from "./homeComponents/FeatureView";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodsList";
import BackTop from 'components/content/backTop/BackTop'
import BetterScroll from "components/common/betterScroll/BetterScroll";
import { getMultiDate, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: null,
      recommends: null,
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      type: ["pop", "new", "sell"],
      curIndex: 0,
      isShowBackTop: false
    };
  },
  components: {
    NavBar,
    swiper,
    HomeRecommand,
    FeatureView,
    TabControl,
    GoodList,
    BetterScroll,
    BackTop
  },
  created() {
    this.getHomeDate(), 
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.type[this.curIndex]].list;
    }
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      this.curIndex = index;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      // console.log(position);
      this.isShowBackTop = position.y < -1000
    },
    loadMore() {
      console.log('上拉加载更多');
      this.getHomeGoods(this.type[this.curIndex])
    },
    /**
     *  网络请求相关方法
     */
    getHomeDate() {
      // 1、请求多个数据
      getMultiDate().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // 2、 请求商品数据
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;

        this.$refs.scroll.finishPullUp()
      });
    }
  }
};
</script>

<style>
#home {
  padding-top: 40px;
  height: 100vh;
}
.home-nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-tint);
  color: #ffffff;
  z-index: 10;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
/* .content {
  height: calc(100vh-49px);
  margin-top: 44px;
  overflow: hidden;
} */
</style>