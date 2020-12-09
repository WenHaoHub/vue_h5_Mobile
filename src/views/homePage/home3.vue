<template>
  <div class="main">
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      @change="onChange"
    >
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <img class="banner" :src="item.src" @click="goPage(item.url)" />
      </van-swipe-item>
      <!-- 指示器 -->
      <template #indicator>
        <div class="myDotFar">
          <span
            v-for="(item, index) in banner"
            :key="index"
            :class="{
              myDotActive: current == index ? true : false,
              myDot: true,
            }"
          ></span>
        </div>
      </template>
    </van-swipe>
    <!-- 文字提示 -->
    <div class="hint">
      <span>请选择您需要的服务</span>
      <span>人才服务专员会第一时间为你提供帮助</span>
    </div>
    <!-- 两图片 -->
    <div class="twoImg">
      <img v-for="(item,index) in twoImg" :key="index" :src="item.src" 
      @click="goPage(item.url)" alt="">
    </div>
    <!-- 宫格 -->
    <div class="grid" v-for="(item,index) in grid" :key="index">
      <Title1 class="myTit" :showData="item.title"/>
      <div class="gridFar">
        <div class="gridSon" v-for="(itemSon,idxSon) in item.li" 
        @click="goPage(itemSon.url)" :key="idxSon">
          <img :src="itemSon.src" alt="">
          <span>{{itemSon.text}}</span>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="last">
      <Title1 class="myTit" showData="悦航都·终身学习"/>
     <img :src='lastImg' alt="" @click="goPage('/urlTest')">
    </div>
  </div>
</template>

<script>
import Title1 from '../../components/title/Title1'
export default {
  data() {
    return {
      current: 0,
      banner: [
        { src: require("../../assets/home3/banner1.png"), url: "/urlTest" },
        { src: require("../../assets/home2/banner1.png"), url: "/urlTest" },
        { src: require("../../assets/home3/banner1.png"), url: "/urlTest" },
      ],
      twoImg: [
        { src: require("../../assets/home3/home3_top1.png"), url: "/urlTest" },
        { src: require("../../assets/home3/home3_top2.png"), url: "/urlTest" },
      ],
      grid:[
        {title:'悦航都·幸福生活',
          li:[
            { src: require("../../assets/home3/icon11.png"),text:'医疗健康', url: "/health" },
            { src: require("../../assets/home3/icon12.png"),text:'子女教育', url: "/education" },
            { src: require("../../assets/home3/icon13.png"),text:'有机蔬菜配送', url: "/urlTest" },
            { src: require("../../assets/home3/icon14.png"),text:'文化艺术', url: "/urlTest" },
            { src: require("../../assets/home3/icon15.png"),text:'运动健身', url: "/urlTest" },
            { src: require("../../assets/home3/icon16.png"),text:'观光休闲', url: "/urlTest" },
            { src: require("../../assets/home3/icon17.png"),text:'佳节问候', url: "/urlTest" },
          ]},
        {title:'悦航都·愉快工作',
          li:[
            { src: require("../../assets/home3/icon2_1.png"),text:'金融服务', url: "/urlTest" },
            { src: require("../../assets/home3/icon2_2.png"),text:'机场要客通道', url: "/urlTest" },
            { src: require("../../assets/home3/icon2_3.png"),text:'人才专车', url: "/urlTest" },
            { src: require("../../assets/home3/icon2_4.png"),text:'政务服务', url: "/urlTest" },
          ]},
        
      ],
      lastImg:require("../../assets/home3/home3_btm.png")
    };
  },
  created(){
    console.log('home3')
  },
  methods: {
    goPage(url) {
      this.$router.push({ path: url });
    },
    onChange(index) {
      this.current = index;
    },
  },
  components:{
    Title1
  }
};
</script>

<style scoped lang="less">
.main {
  // min-height: 100vh;
   width: 100%;
  box-sizing: border-box;
  // 轮播图
  .my-swipe .van-swipe-item {
    position: relative;
    // width: 375px;
    width: 375px;
    height: 180px;
    .banner {
      width: 100%;
      height: 160px;
    }
  }
  .myDotFar {
    position: absolute;
    bottom: 0px;
    z-index: 9;
    left: 50%;
    transform: translateX(-50%);
  }
  .myDot {
    //指示点
    display: inline-block;
    width: 8px;
    height: 4px;
    background: #d8d8d8;
    margin-left: 6px;
    transition: all 0.6s;
    border-radius: 4px;
  }
  .myDotActive {
    width: 18px;
    height: 4px;
    background-image: linear-gradient(-90deg, #8dadff 0%, #008aff 100%);
  }
  //提示文字
  .hint{
    margin: 20px auto;
    text-align: center;
    span{
      &:nth-child(1){
        color: #333333;
        font-size: 14px;
        display: block;
        font-weight: 550;
        margin-bottom: 6px;
      }
      &:nth-child(2){
        color: #999999;
        font-size: 12px;
      }
    }
  }
  .twoImg{
    display: flex;
    justify-content: space-around;
    // padding:0 12px;
    img{
      width: 160px;
      height: 86px;
    }
  }
  // 宫格
  .myTit{
        margin:36px 0 24px 0;
    }
  .grid{
    .gridFar{
      display: flex;
      flex-wrap: wrap;
      .gridSon{
        width: 25%;
        text-align: center;
        margin-bottom: 16px;
        img{
          width: 40px;
          height: 40px;
          margin-bottom: 6px;
        }
        span{
          display: block;
          font-size: 12px;
          font-weight: 400;
          color: #666666;
        }
      }
    }
  }
  .last{
    // padding: 0 30px 24px 30px;
    padding-bottom:42px;
    text-align: center;
    img{
      width: 315px;
      height: 96px;
    }
  }

}
</style>