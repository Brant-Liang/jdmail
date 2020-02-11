<template>
  <div class="recommands">
    <div class="recommands-item" v-for="(item, index) in recommands" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeRecommand",
  props: {
    recommands: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
  .recommands {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommands-item {
    flex: 1;
    font-size: 14px;
  }
  .recommands-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>