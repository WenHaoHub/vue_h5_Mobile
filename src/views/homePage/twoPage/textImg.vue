<template>
  <div class="main">
    <div class="pcList">
      <span class="pcListspan">{{ row1[0].title }}11</span>
      <div class="lookTime">
        <span>{{ row1[0].time }}</span>
        <!-- <span>{{ farTit.site }}</span> -->
        <div class="look">
          <van-icon class="myIconDiy" name="eye-o" size="18" />
          <span>{{ row1[0].sum }}</span>
        </div>
      </div>
    </div>
    <div class="text">
      {{ text }}
      <img v-for="(item, index) in imgArr" :key="index" :src="item" alt="" />
      <p>成都市双流区人才服务中心2020年11月</p>
    </div>
    <div class="more">
      <Title1 class="myTit1" showData="相关文章" />
      <div
        class="look"
        v-for="(item, index) in row1"
        :key="index"
        @click="goPage(item.url)"
      >
        <span>{{ item.title }}</span>
        <span>{{ item.time }}</span>
      </div>
    </div>
    <p class="btm">已经到底啦</p>
  </div>
</template>

<script>
import Title1 from "../../../components/title/Title1";
import { createNamespacedHelpers } from "vuex";
const { mapState,mapMutations} = createNamespacedHelpers("home1");
export default {
  data() {
    return {
      row: [],
    };
  },
  computed: {
    ...mapState(["row1", "text", "imgArr"]),
  },
  methods: {
     goPage(url) {
      this.$router.push({ path: url });
    },
  },
  components:{
    Title1
  }
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
    padding-top: 10px;
    font-size: 16px;
    // font-weight: Regular;
    color: #333333;
    line-height: 28px;
    text-indent: 2em;//缩进
    img {
      width: 100%;
      &:nth-of-type(1){
        margin-top: 10px;
      }
    }
    p {
    text-indent: 0;//缩进
      width: 200px;
      margin: 0 auto;
      padding:30px 0;
      text-align: center;
      font-size: 16px;
      color: #333333;
      line-height: 24px;
      // margin: 26px 0 30px 0;
    }
  }
  .more {
    background: white;
      overflow: hidden;
    .myTit1{
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