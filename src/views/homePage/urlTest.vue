<template>
  <div class="main">
    <p>即将上线</p>
    <img :src="src" alt="" />
    <p>功能建设中，敬请期待</p>
    <div class="btn" @click="goPage">返回首页</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require("../../assets/create.png"),
    };
  },
  methods:{
    goPage(){
       this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped lang="less">
.main {
  text-align: center;
  p {
    &:nth-of-type(1) {
      font-size: 16px;
      color: #333333;
      margin: 14px 0;
    }
    &:nth-of-type(2) {
      font-size: 16px;
      color: #9b9b9b;
      margin-bottom: 54px;
    }
  }
  img {
    width: 245px;
    height: 190px;
    margin: 50px 0 32px 0;
  }
  .btn {
    width: 195px;
    height: 45px;
    margin: 0 auto;
    background: linear-gradient(315deg, #8dadff 0%, #008aff 100%);
    border-radius: 23px;
    font-size: 14px;
    color: #ffffff;
    line-height: 45px;
  }
}
</style>