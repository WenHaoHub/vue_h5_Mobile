<template>
  <div @click="goPage(url)">查看更多<van-icon class="myIcon" name="arrow" color="#999999" /></div> 
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "/urlTest",
    },
  },
  methods: {
    goPage(url) {
      this.$router.push({ path: url });
    },
  },
};
</script>

<style scoped lang="less">
div {
  font-size: 12px;
  color: #999999;
  margin-top: 12px;
  text-align: center;
  .myIcon{
    vertical-align: bottom;
    margin-left: 10px;
  }
}
</style>