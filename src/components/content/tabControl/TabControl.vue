<template>
  <div class="tab-control">
    <div :class="{active: index === curIndex}" class="tab-control-item"
     v-for="(item, index) in titles" :key="index" @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      } 
    }
  },
  data() {
    return {
      curIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.curIndex = index;
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 16px;
    background-color: #ffffff;
  }
  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-high-text);
    padding: 5px;
  }
</style>