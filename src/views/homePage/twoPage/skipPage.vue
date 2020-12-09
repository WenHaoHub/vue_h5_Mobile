<template>
  <div class="main">
    <p>请选择出具证明</p>
    <a
      class="li"
      v-for="(item, index) in li"
      :key="index"
      :href="item.url"
    >
      <img :src="item.img" />
      <span>{{ item.text }}</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
      return{
      li:[
        {img: require("../../../assets/skipPage.png"),text: "存档证明",url: "http://s.rc114.com/ServiceGuide.aspx?fnameen=func05"},
        {img: require("../../../assets/skipPage.png"),text: "经历证明",url: "http://s.rc114.com/ServiceGuide.aspx?fnameen=func06"},
        {img: require("../../../assets/skipPage.png"),text: "亲属关系证明",url: "http://s.rc114.com/ServiceGuide.aspx?fnameen=func07"},
        {img: require("../../../assets/skipPage.png"),text: "无犯罪记录证明",url: "http://s.rc114.com/ServiceGuide.aspx?fnameen=func08"},
        {img: require("../../../assets/skipPage.png"),text: "其他证明",url: "http://s.rc114.com/ServiceGuide.aspx?fnameen=func10"},
      ]
      }

  },
 methods: {
    goPage(url) {
      this.$router.push({ path: url });
    }
  }
};
</script>

<style scoped lang="less">
.main {
  min-height: 100vh;
  background: #f6f6f6;
  p{
      margin: 0;
      padding: 14px 0 14px 20px;
      font-size: 14px;
      font-weight: 400;
      color: #333333;
  }
  a{
      display: flex;
      align-items: center;
      width: 375px;
      height: 50px;
      background: #FFFFFF;
      margin-bottom: 1px;
      img{
          width: 24px;
          height: 24px;
          margin: 0 10px 0 20px;
      }
      span{
        font-size: 14px;
        color: #333333;
      }
  }
}
</style>