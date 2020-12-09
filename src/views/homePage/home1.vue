<template>
  <div class="main">
    <!-- 标题 -->
    <!-- <div class="top">
      <van-nav-bar :fixed="true" :placeholder="true">
        <template #title>
          <span class="myTitle">航都人才之家</span>
        </template>
      </van-nav-bar>
    </div> -->
    <!-- 轮播图 -->
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
      @change="onChange"
    >
      <van-swipe-item
        v-for="(item, index) in banner"
        :key="index"
        :class="{
          myBannerActive: current == index ? true : false,
          myBanner: true,
        }"
      >
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

        <!-- <div
          :class="{ myDotActive: current == index ? true : false, myDot: true }"
        ></div> -->
      </template>
    </van-swipe>
    <div class="needLook">
      <Title1 class="myTit1" showData="通知公告" />
      <div
        class="look"
        v-for="(item, index) in row1"
        :key="index"
        @click="goPage(item.url)"
      >
        <span>{{ item.title }}</span>
        <span>{{ item.time }}</span>
      </div>
      <More />
    </div>
    <!-- grid -->
    <div class="grid">
      <Title1 class="myTit" />
      <div class="gridRow" v-for="(item, index) in row2" :key="index">
        <Title2 class="myTit2" :showData="item.title" />
        <div class="gridFar">
          <div
            v-for="(itemSon, idxSon) in item.li"
            :key="idxSon"
            :class="{gridSon: true,gridSonNeedTop:idxSon == 0 || idxSon == 1 || idxSon == 2 ? true : false}"
            @click="goHref(itemSon.url,itemSon.text)">
              <img :src="itemSon.src" alt="" />
              <span>{{ itemSon.text }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="twoImg">
      <img
        v-for="(item, idx) in twoImg"
        :key="idx"
        :src="item.src"
        @click="goPage(item.url)"
        alt=""
      />
      <p>已经到底啦</p>
    </div>
  </div>
</template>

<script>
import Title1 from "@c/title/Title1";
// import Title1 from "../../components/title/Title1";
import Title2 from "@c/title/Title2";
// import Title2 from "../../components/title/Title2";
import More from "../../components/title/More";

export default {
  data() {
    return {
      current: 0,
      banner: [
        {
          src: require("../../assets/home1/home1_banner1.png"),
          url: "/urlTest",
        },
        {
          src: require("../../assets/home1/home1_banner2.png"),
          url: "/urlTest",
        },
        {
          src: require("../../assets/home1/home1_banner3.png"),
          url: "/urlTest",
        },
        {
          src: require("../../assets/home1/home1_banner4.png"),
          url: "/urlTest",
        },
      ],
      row1: [
        {
          title: "2020年“梦圆双流•校园行”组团招聘活",
          time: "2020-11-24",
          url: "/textImg",
        },
        {
          title: "2020年“梦圆双流•校园行”组团招聘活",
          time: "2020-11-20",
          url: "/textImg",
        },
        { title: "中秋节、国庆节放假通告", time: "2020-9-21", url: "/textImg" },
      ],
      row2: [
        {
          title: "社会人才人事档案服务",
          li: [
            {
              src: require("../../assets/home1/home1_1.png"),
              text: "到档查询",
              url: "http://s.rc114.com/Doc/Query.aspx",
            },
            {
              src: require("../../assets/home1/home1_2.png"),
              text: "档案转接",
              url: "http://s.rc114.com/ServiceGuide.aspx?fnameen=func01",
            },
            {
              src: require("../../assets/home1/home1_3.png"),
              text: "出具证明",
              url: "http://s.rc114.com/ServiceGuide.aspx?fnameen=func05",
            },
            {
              src: require("../../assets/home1/home1_4.png"),
              text: "档案材料补充",
              url: "http://s.rc114.com/ServiceGuide.aspx?fnameen=func02",
            },
            {
              src: require("../../assets/home1/home1_5.png"),
              text: "档案查（借）阅",
              url: "http://s.rc114.com/ServiceGuide.aspx?fnameen=func04",
            },
            {
              src: require("../../assets/home1/home1_6.png"),
              text: "政审（考察）",
              url: "http://s.rc114.com/ServiceGuide.aspx?fnameen=func11",
            },
          ],
        },
        {
          title: "人才入户",
          li: [
            {
              src: require("../../assets/home1/home2_1.png"),
              text: "调动、安置、招录人员入户",
              url: "",
            },
            {
              src: require("../../assets/home1/home2_2.png"),
              text: "高层次、高技能人才入户",
              url: "",
            },
            {
              src: require("../../assets/home1/home2_3.png"),
              text: "博士后人员入户",
              url: "",
            },
            {
              src: require("../../assets/home1/home2_4.png"),
              text: "取得“蓉城人才绿卡” 人员入户",
              url: "",
            },
            {
              src: require("../../assets/home1/home2_5.png"),
              text: "国(境)外本科及以上学历毕业生入户",
              url: "",
            },
            {
              src: require("../../assets/home1/home2_6.png"),
              text: "全日制普通大学本科及以上学历青年人才落户",
              url: "",
            },
            {
              src: require("../../assets/home1/home2_7.png"),
              text: "技能人才入户认证",
              url: "https://es.cdhrss.chengdu.gov.cn:15222/rcrhqt/",
            },
            {
              src: require("../../assets/home1/home2_8.png"),
              text: "中级职称及以上专业技术人才入户认证",
              url: "",
            },
            {
              src: require("../../assets/home1/home2_9.png"),
              text: "集体户户口页借还",
              url: "http://s.rc114.com/ServiceGuide.aspx?fnameen=func21",
            },
            {
              src: require("../../assets/home1/home2_10.png"),
              text: "R字（人才）签证申请",
              url: "",
            },
          ],
        },
        {
          title: "职称评估",
          li: [
            {
              src: require("../../assets/home1/home3_1.png"),
              text: "职称评审",
              url: "https://es.cdhrss.chengdu.gov.cn:6001/zjkqt/#",
            },
            {
              src: require("../../assets/home1/home3_2.png"),
              text: "职称认定",
              url: "https://es.cdhrss.chengdu.gov.cn:6001/zjkqt/#",
            },
            {
              src: require("../../assets/home1/home3_3.png"),
              text: "双流区新能源专业职称评定",
              url: "https://es.cdhrss.chengdu.gov.cn:6001/zjkqt/#",
            },
          ],
        },
        {
          title: "流动党员服务",
          li: [
            {
              src: require("../../assets/home1/home4_1.png"),
              text: "党组织关系转接",
              url: "",
            },
            {
              src: require("../../assets/home1/home4_2.png"),
              text: "党费收缴",
              url: "",
            },
            {
              src: require("../../assets/home1/home4_3.png"),
              text: "预备党员转正",
              url: "",
            },
            {
              src: require("../../assets/home1/home4_4.png"),
              text: "党员教育培训及活动",
              url: "",
            },
          ],
        },
        {
          title: "高校毕业生及户口服务",
          li: [
            {
              src: require("../../assets/home1/home5_1.png"),
              text: "毕业生接收登记",
              url: "http://s.rc114.com/ServiceGuide.aspx?fnameen=func32",
            },
            {
              src: require("../../assets/home1/home5_2.png"),
              text: "毕业生报到入户",
              url: "http://s.rc114.com/ServiceGuide.aspx?fnameen=func18",
            },
            {
              src: require("../../assets/home1/home5_3.png"),
              text: "高校毕业生服务基层项目",
              url: "",
            },
          ],
        },

        {
          title: "高校毕业生（青年）就业见习服务",
          li: [
            {
              src: require("../../assets/home1/home6_1.png"),
              text: "就业见习基地申报",
              url: "",
            },
            {
              src: require("../../assets/home1/home6_2.png"),
              text: "就业见习岗位申请",
              url: "",
            },
            {
              src: require("../../assets/home1/home6_3.png"),
              text: "就业见习补贴申报",
              url: "",
            },
          ],
        },
      ],
      twoImg: [
        {
          src: require("../../assets/home1/home1_btm1_2.png"),
          url: "/urlTest",
        },
        {
          src: require("../../assets/home1/home1_btm2_2.png"),
          url: "/urlTest",
        },
      ],
    };
  },
  methods: {
    goPage(url) {
      this.$router.push({ path: url });
    },
    goHref(url,text){
      if(text=="出具证明"){
       this.$router.push({ path: "/skipPage" });
       return
      }
      if(!url){
       this.$router.push({ path: "/urlTest" });
       return
      }
      window.location.href = url;
    },
    onChange(index) {
      this.current = index;
    },
  },
  components: {
    Title1,
    Title2,
    More,
  },
};
</script>

<style scoped lang="less">
.main {
  .top {
    .myTitle {
      font-size: 16px;
      color: #333333;
      font-weight: 550;
    }
  }
  // 轮播图
  .my-swipe .van-swipe-item {
    position: relative;
    width: 375px;
    height: 180px;
    text-align: center;
    .banner {
      width: 96%;
      height: 160px;
      margin:6px 0;
      border-radius: 8px;
    }
  }
  // .myBanner{
  //     // border: 1px solid red;

  //     width: 300px;
  //     .banner {
  //     width: 300px;
  //     height: 160px;
  //   }
  //  }
  // .myBannerActive{
  //     border: 1px solid red;
  //     margin-left:-40px;
  //     width: 300px !important;
  //  }
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
  .needLook {
    .look {
      padding: 0 17px 0 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid #f1f1f1;
      span {
        &:nth-child(1) {
          text-align: left;
          font-size: 14px;
          color: #333333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &:nth-child(2) {
          text-align: right;
          width: 100px;

          font-size: 12px;
          color: #999999;
        }
      }
    }
  }
  .myTit1 {
    margin: 14px 0 4px 0;
  }
  .myTit2 {
    margin: 20px 0;
  }
  .myTit {
    margin: 36px 0 0 0;
  }
  .grid {
    .gridRow {
      .gridFar {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        .gridSon {
          box-sizing: border-box;
          text-align: center;
          width: 33.33%;
          // height: 95px;
          padding: 16px 0;
          border: 1px solid #eeeeee;
          border-width: 0 1px 1px 0;

          img {
            width: 40px;
            height: 40px;
            margin-bottom: 9px;
          }
          span {
            display: block;
            margin: 0 auto;
            width: 98px;
            font-size: 12px;
            font-weight: 400;
            color: #666666;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }
        .gridSonNeedTop {
          border: 1px solid #eeeeee;
          border-width: 1px 1px 1px 0;
        }
      }
    }
  }
  .twoImg {
    text-align: center;
    img {
      width: 335px;
      height: 90px;
      &:nth-child(1){
        margin: 20px 0 12px 0;
      }
      &:nth-child(2){
        margin: 0 0 20px 0;
      }
    }
    p {
      font-size: 13px;
      font-weight: 400;
      color: #cccccc;
    }
  }
}
</style>