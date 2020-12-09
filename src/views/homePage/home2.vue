<template>
  <div class="main">
    <div class="banner">
      <img :src="banner" alt="" />
      <div class="search">
        <van-icon name="search" size="22" color="#ffffff"/>
        <input type="span" placeholder="请输入政策关键字进行搜索" />
      </div>
    </div>
    <!-- 1 -->
   <div class="li1">
    <Title1 showData="政策目录" />
    <div class="text1"  v-for="(item,index) in li1" :key="index" @click="goPage(item.url)">{{item.span}}</div>
    <More/>
  </div>
  <div class="li2">
    <Title1 showData="政策文件" />
    <div class="text2"  v-for="(item,index) in li2" :key="index" @click="goPage(item.url)">
      <div class="text2Top">{{item.span}}</div>
      <div class="text2Btm">
        <span>{{item.site}}</span>
        <span>{{item.time}}</span>
      </div>
    </div>
    <More/>
  </div>
  <div class="li3">
    <Title1 showData="政策解读" />
    <div class="pcMain" v-for="(item,index) in li3" :key="index"  @click="goPage(item.url)">
      <div class="pcList">
        <span class="pcListspan">{{item.span}}</span>
        <div class="lookTime">
          <span>{{item.time}}</span>
          <span>{{item.site}}</span>
          <div class="look">
            <van-icon class="myIconDiy" name="eye-o" size="18"/>
            <span>{{item.sum}}</span>
          </div>
        </div>
      </div>
    </div>
    <More/>
  </div>
  </div>

</template>

<script>
  import Title1 from "../../components/title/Title1";
  import Title2 from "../../components/title/Title2";
  import More from "../../components/title/More";
export default {
  data() {
    return {
      banner: require("../../assets/home2/banner1.png"),
      li1: [
        { span: "《成都新经济重要政策文件目录汇编》", url: "/textAffix" },
        { span: "《成都新经济重要政策文件目录汇编》", url: "/textAffix" },
        { span: "《成都新经济重要政策文件目录汇编》", url: "/textAffix" },
      ],
      li2: [
        {
          span: "关于完善商品住房公证摇号排序选房有关规定的补充通知",
          site: "成住建发〔2020〕398号",
          time: "2020-11-24",
          url: "/urlTest",
        },
        {
          span:
            "成都市人民政府关于印发加快推进成都航空货运枢纽建设扶持政策的通知",
          site: "成住建发〔2020〕398号",
          time: "2020-11-24",
          url: "/urlTest",
        },
        {
          span:
            "成都市人民政府办公厅关于印发成都建设国家新一代人工智能创新发展实验区实施方案的通知",
          site: "成住建发〔2020〕398号",
          time: "2020-11-24",
          url: "/urlTest",
        },
        {
          span:
            "成都市人民政府办公厅关于印发成都建设国家新一代人工智能创新发展实验区实施方案的通知",
          site: "成住建发〔2020〕398号",
          time: "2020-11-24",
          url: "/urlTest",
        },
      ],
      li3: [
        {
          span: "技术技能提升补贴政策解读",
          site: "城乡就业促进和失业保险处",
          time: "2020-11-24",
          sum: "835",
          url: "/urlTest",
        },
        {
          span: "《成都市促进2020年高校毕业生就业创业十条措施》政策解读",
          site: "城乡就业促进和失业保险处",
          time: "2020-11-24",
          sum: "835",
          url: "/urlTest",
        },
        {
          span: "技术技能提升补贴政策解读",
          site: "城乡就业促进和失业保险处",
          time: "2020-11-24",
          sum: "835",
          url: "/urlTest",
        },
        {
          span: "困难失业人员临时生活补助发放政策解读",
          site: "城乡就业促进和失业保险处",
          time: "2020-11-24",
          sum: "835",
          url: "/urlTest",
        },
        {
          span: "成都市经营困难且恢复有望企业稳岗返还政策解读",
          site: "城乡就业促进和失业保险处",
          time: "2020-11-24",
          sum: "835",
          url: "/urlTest",
        },
      ],
    };
  },
    components: {
    Title1,
    Title2,
    More,
  },
  methods: {
    goPage(url) {
      this.$router.push({ path: url });
    },
  },
};
</script>

<style scoped lang="less">
.main {
  width: 100%;
  box-sizing: border-box;
  .banner {
    position: relative;
    img {
      width: 100%;
      // height: 160px;
    }
    .search {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 315px;
      height: 40px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 25px;

      input {
        
        margin-left: 6px;
        width: 180px;
        height: 30px;
        border: none;
          background: rgba(163, 84, 84, 0);
        &::-webkit-input-placeholder {
          font-size: 13px;
          color: #ffffff;
        }
      }
    }
  }
   .li1,.li2,.li3 {
    margin-bottom: 15px;
      // box-sizing: border-box;
    .text2,.pcMain{
      box-sizing: border-box;
    }
  }
  .li1 {
    .text1 {
      // margin-left:24px;
      margin: 0 auto;
      width: 88%;
      height: 50px;
      line-height: 50px;
      background: #FFFFFF;
      border-bottom: 1px solid rgba(241,241,241,1);
      font-size: 14px;
      font-weight: 400;
      color: #333333;
      &:nth-child(2){
        margin-top: 6px;
      }
    }
  }
  .li2{
    .text2{
      margin: 0 auto;
      // margin-left:24px;
      width: 88%;
      height: 90px;
      background: #FFFFFF;
      border-bottom: 1px solid rgba(241,241,241,1);
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      padding: 16px 0 10px 0;
      &:nth-child(2){
        margin-top: 10px;
      }
      .text2Top{
        font-size: 14px;
        color: #333333;
      }
      .text2Btm{
        width: 100%;
        display: flex;
        justify-content: space-between;
        span{
          display: block;
          font-size: 12px;
          color: #999999;
        }
      }
    }
  }
  .li3{
    .pcMain {
      margin: 0 auto;
      // margin-left:24px;
      width: 88%;
      height: 100px;
      padding: 14px 0;
      border-bottom: 1px solid rgba(241,241,241,1);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%);
      &:nth-child(2){
        margin-top: 6px;
      }
      .pcList {
       margin: 0 auto;
        // width: 320px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .pcListspan {
          font-size: 14px;
          font-weight: 400;
          color: #333333;
        }
        .lookTime {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 400;
          color: #999999;

          .look {
            display: inline-block;
            .myIconDiy{
              vertical-align: middle;
              margin-right: 2px;
            }
          }
        }
      }
    }
  }
}
</style>