<template>
  <!-- 子女教育 -->
  <div class="main">
    <img :src="myHead" alt="" @click="goPage" />
    <div class="btm">
      <p>功能建设中，敬请期待</p>
      <img :src="myBtn" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myHead: require("../../../assets/home3/education.png"),
      myBtn: require("../../../assets/home3/btnImg.png"),
    };
  },
  methods: {
    goPage() {
      this.$router.push({ path: "/urlTest" });
    },
  },
};
</script>

<style scoped lang="less">
.main {
  display: flex;
  align-content: space-between;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  img {
    &:nth-of-type(1) {
      width: 100%;
    }
  }
  .btm {
    text-align: center;
    p {
      margin: 0;
      font-size: 14px;
      color: #e12e00;
    }
    img {
      margin: 18px 0 30px 0;
      width: 316px;
      height: 46px;
    }
  }
}
</style>