<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div 
          class="title-item" 
          :class="{active: index === curIndex}" 
          v-for="(item, index) in titles" 
          :key="index"
          @click="navClick(index)"
      >
          {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评价', '推荐'],
      curIndex: 0
    }
  },
  methods: {
    navClick(index) {
      this.curIndex = index
    },
    backClick() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back img {
  margin-top: 12px;
  margin-left: 12px;
}
</style>