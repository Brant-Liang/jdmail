<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'BetterScroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: {}
    }
  },
  mounted() {
    // 1、 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    })
    // 2、 监听滚动位置
    this.scroll.on('scroll', (position) => {
      // console.log(position);
      this.$emit('scroll', position)
    })
    // 3、监听上拉事件
    // 4、监听滚到底部
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
    // this.scroll.refresh()
  },
  methods: {
    scrollTo(x, y, time=500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style>

</style>