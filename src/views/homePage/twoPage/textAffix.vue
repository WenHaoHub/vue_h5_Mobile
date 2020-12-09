<template>
  <div class="main">
    <div class="pcList">
      <span class="pcListspan">{{ row1.title }}11</span>
      <div class="lookTime">
        <span>{{ row1.time }}</span>
        <!-- <span>{{ farTit.site }}</span> -->
        <div class="look">
          <van-icon class="myIconDiy" name="eye-o" size="18" />
          <span>{{ row1.sum }}</span>
        </div>
      </div>
    </div>

    <div class="text">
      <span>{{ text1 }}</span>
      <span>{{ text2 }}</span>
      <span>{{ text3 }}</span>
      <span>{{ text4 }}</span>
      <img v-for="(item, index) in row2" :key="index" :src="item" alt="" />
      <p>
        成都市双流区人才服务中心 <br />
        2020年11月
      </p>
    </div>
    <div class="affix">
      <p>附件下载：</p>
      <span>2019年成都市双流区公开招聘政府雇员递补拟聘人员名单.xlsx</span>
    </div>
    <div class="more">
      <Title1 class="myTit1" showData="相关文章" />
      <div class="look" v-for="(item, index) in row2" :key="index">
        <span>{{ item.title }}</span>
        <span>{{ item.time }}</span>
      </div>
    </div>
    <p class="btm">已经到底啦</p>
  </div>
</template>

<script>
import Title1 from "../../../components/title/Title1";
export default {
  data() {
    return {
      row1: {
        title: "2019年成都市双流区公开招聘政府雇员递补拟聘人员名单公示",
        time: "2020-02-04",
        sum: 852,
        url: "/test",
      },
      text1:
        "2019年成都市双流区公开招聘政府雇员考试，0401岗位1名拟聘人员主动放弃，根据招聘公告，已按该岗位参加面试人员总成绩排名依次等额递补进入体检、考察，现予以公示，公示时间为2020年2月4日—2月10日。公示期间如有异议者拨打以下电话：成都市双流区纪委监委驻人社局纪检监察组 028-85736202。",
      text2: "咨询电话",
      text3: "成都市双流区人才交流中心 028-",
      text4: "85822441",
      row2: [
        {
          title: "2019年成都市双流区公开招聘政府雇员…",
          time: "2020-02-04",
          url: "/test",
        },
        {
          title: "2019年成都市双流区公开招聘政府雇员…",
          time: "2020-02-04",
          url: "/test",
        },
        {
          title: "2019年成都市双流区公开招聘政府雇员…",
          time: "2020-02-04",
          url: "/test",
        },
      ],
    };
  },
  methods: {
    goPage(url) {
      this.$router.push({ path: url });
    },
  },
  components: {
    Title1,
  },
};
</script>

<style scoped lang="less">
.main {
  background: #f6f6f6;
  .pcList,
  .text {
    // width: 335px;
    margin: 0 auto;
    background: #ffffff;
    padding: 0 20px;
  }
  .pcList {
    // width: 320px;
    height: 100px;
    box-sizing: border-box;
    padding: 12px 20px 18px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .pcListspan {
      font-size: 16px;
      color: #333333;
      font-weight: 550;
    }
    .lookTime {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      font-weight: 400;
      color: #999999;

      .look {
        display: inline-block;
        .myIconDiy {
          vertical-align: middle;
          margin-right: 2px;
        }
      }
    }
  }
  .text {
    margin: 6px 0 16px 0;
    span {
      display: block;
      font-size: 16px;
      // font-weight: Regular;
      font-family: PingFangSC-Regular, PingFang SC;
      color: #333333;
      line-height: 26px;
      text-indent: 2em;
    }
    img {
      width: 100%;
    }
    p {
      // width: 168px;
      // margin: 0 auto;
      padding: 30px 0;
      text-align: right;
      font-size: 14px;
      color: #333333;
      line-height: 20px;
      // margin: 26px 0 30px 0;
    }
  }
  .more {
    background: white;
    overflow: hidden;
    .myTit1 {
      margin: 20px 0 4px 0;
    }
    .look {
      padding: 0 17px 0 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid #f1f1f1;
      span {
        &:nth-of-type(1) {
          text-align: left;
          font-size: 14px;
          color: #333333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        &:nth-of-type(2) {
          text-align: right;
          width: 150px;

          font-size: 12px;
          color: #999999;
        }
      }
    }
  }
  .affix {
    background: white;
    padding: 0 20px;
    margin-bottom: 16px;
    overflow: hidden;
    p {
      width: 70px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 20px;
      margin: 12px 0;
    }
    span{
      display: block;
      overflow: hidden;
      font-size: 14px;
      font-weight: 400;
      color: #0072FF;
      line-height: 20px;
      margin-bottom: 16px;
    }
  }
  .btm {
    padding: 20px 0;
    margin: 0;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: #cccccc;
    line-height: 17px;
  }
}
</style>