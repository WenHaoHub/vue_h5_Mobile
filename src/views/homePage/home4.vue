<template>
  <div class="main">
    <div class="myHead">
      <img :src="myHead" class="headImg"/>
      <div class="upData">
        <div class="name">
          <span>{{ name }}</span>
          <span>点击查看或编辑个人信息</span>
        </div>
        <img :src="rigth"/>
      </div>
    </div>
    <div class="therr">
      <div
        class="gird"
        v-for="(item,index) in therr"
        :key="index"
        @click="goPage(item.url)"
      >
        <img :src="item.img"/>
        <span>{{ item.text }}</span>
      </div>
    </div>
    <!-- li列表 -->
    <div class="myLi">
        <!-- @click="goPage(item.url)" -->
      <div
        class="li"
        v-for="(item,index) in li"
        :key="index"
        @click="showPopup"
      >
        <img :src="item.img"/>
        <span>{{ item.text }}</span>
      </div>
    </div>
    <!-- 弹出层 -->
    <van-popup v-model="show">内容</van-popup>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  data() {
    return {
      myHead: require("../../assets/home4/headImg.png"),
      rigth: require("../../assets/home4/rigth.png"),
      name: "都挺好",
      therr: [
        {
          img: require("../../assets/home4/top1_1.png"),
          text: "服务申请",
          url: "/urlTest",
        },
        {
          img: require("../../assets/home4/top1_2.png"),
          text: "我的收藏",
          url: "/urlTest",
        },
        {
          img: require("../../assets/home4/top1_3.png"),
          text: "申报进度",
          url: "/urlTest",
        },
      ],
      li:[
        {img: require("../../assets/home4/icon1.png"),text: "我的简历",url: "/urlTest"},
        {img: require("../../assets/home4/icon2.png"),text: "我的投递",url: "/urlTest"},
        {img: require("../../assets/home4/icon3.png"),text: "政策咨询",url: "/urlTest"},
        {img: require("../../assets/home4/icon4.png"),text: "意见建议",url: "/urlTest"},
        {img: require("../../assets/home4/icon5.png"),text: "关于我们",url: "/urlTest"},
        {img: require("../../assets/home4/icon6.png"),text: "切换身份",url: "/urlTest"},
        {img: require("../../assets/home4/icon7.png"),text: "更换手机号码",url: "/urlTest"},
        {img: require("../../assets/home4/icon8.png"),text: "修改密码",url: "/urlTest"},
        {img: require("../../assets/home4/icon9.png"),text: "退出登录",url: "/urlTest"},
      ],
      show: false,
    };
  },
  methods: {
    goPage(url) {
      this.$router.push({ path: url });
    },
    showPopup() {
      // this.show = true;
      Dialog.alert({
        title: '功能建设中',
        message: '敬请期待',
        confirmButtonColor:'#449CFC'
      }).then(() => {
        // on close
      });
    },
  },
  components: {
    // [Dialog.Component.name]: Dialog.Component,
  },
};
</script>
<style scoped lang="less">
.main {
  background-color: #f6f6f6;
  min-height: 100vh;
  padding-top: 2px;
  .myHead,
  .therr {
    box-sizing: border-box;
    width: 100%;
    height: 94px;
  }
  .myHead {
    background: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 20px 0 30px;
    .headImg {
      width: 64px;
      height: 64px;
    }
    .upData {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 10px;
      span {
        &:nth-child(1) {
          display: block;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 6px;
          letter-spacing:6px;//字间距调节
        }
        &:nth-child(2) {
          font-size: 12px;
          color: #999999;
        }
      }
      img {
        width: 22px;
        height: 20px;
      }
    }
  }
  .therr {
    padding: 0 10px;
    background: #ffffff;
    display: flex;
    justify-content: space-around;
    .gird {
      text-align: center;
      img {
        width: 40px;
        height: 40px;
      }
      span {
        display: block;
        font-size: 13px;
        color: #666666;
      }
    }
  }
  .myLi{
    .li{
      display: flex;
      align-items: center;
      height: 50px;
      background: #ffffff;
      margin-bottom: 1px;
      &:nth-of-type(1){
        margin-top: 12px;
      }
      &:nth-of-type(3){
        margin-top: 12px;
      }
      &:nth-of-type(7){
        margin-top: 12px;
      }
      img{
        width: 26px;
        height: 24px;
        margin: 0 8px 0 20px;
      }
      span{
        font-size: 14px;
        color: #333333;
      }
      
    }
  }
}
</style>