<template>
  <div class="main">
    <p>申请成功</p>
    <img :src="src" alt="" />
    <p>您已成功提交申请</p>
    <p>请耐心等待</p>
    <div class="btn" @click="goPage(1)">返回首页</div>
    <div class="btn" @click="goPage(2)">查看服务申请</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require("@/assets/home3/success.png"),
    };
  },
  methods: {
    goPage(data) {
      if(data==1){
        this.$router.push({ path: "/home/home3" });
      }else{
        this.$router.push({ path: "/urlTest" });
      }
    },
  },
};
</script>

<style scoped lang="less">
.main {
  text-align: center;
  p {
    margin: 0;
    &:nth-of-type(1) {
      font-size: 16px;
      font-weight: Medium;
      color: #333333;
      margin: 14px 0;
    }
    &:nth-of-type(2) {
      font-size: 16px;
      color: #9b9b9b;
      margin-bottom: 20px;
    }
    &:nth-of-type(3) {
      font-size: 14px;
      color: #9b9b9b;
      margin-bottom: 32px;
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
    &:nth-of-type(2) {
      margin-top: 20px;
      color: #0072ff;
      background: #ffffff;
      border: 1px solid #0072ff;
    }
  }
}
</style>