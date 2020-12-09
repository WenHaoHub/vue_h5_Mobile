<template>
  <div class="home">
    <router-view />
    <van-tabbar class="diyTabbar" v-model="active" @change="onChange">
      <van-tabbar-item>
        <span>公共服务</span>
        <template #icon="props">
          <img :src="props.active ? icon.active1 : icon.inactive1" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>人才政策</span>
        <template #icon="props">
          <img :src="props.active ? icon.active2 : icon.inactive2" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>高端人才</span>
        <template #icon="props">
          <img :src="props.active ? icon.active3 : icon.inactive3" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>用户中心</span>
        <template #icon="props">
          <img :src="props.active ? icon.active4 : icon.inactive4" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      active:0,
      icon: {
        active1: require("../assets/home1Ac.png"),
        inactive1: require("../assets/home1.png"),
        active2: require("../assets/home2Ac.png"),
        inactive2: require("../assets/home2.png"),
        active3: require("../assets/home3Ac.png"),
        inactive3: require("../assets/home3.png"),
        active4: require("../assets/home4Ac.png"),
        inactive4: require("../assets/home4.png"),
      },
    };
  },
  created(){
    let newActive=localStorage.getItem('newActive')
    if(newActive){
      this.active=newActive-0;
      this.goWhere(this.active)
    }
  },
  methods: {
    onChange(index) {
      localStorage.setItem("newActive",index);
      this.goWhere(index)
    },
    goWhere(index){
      switch (index) {
        case 0:
          this.$router.push({ path: "/home/home1" });
          break;
        case 1:
          this.$router.push({ path: "/home/home2" });
          break;
        case 2:
          this.$router.push({ path: "/home/home3" });
          break;
        case 3:
          this.$router.push({ path: "/home/home4" });
          break;
      }
    }
  },
  components: {},
};
</script>
<style scoped lang="less">
.home{
  padding-bottom: 50px;

  .diyTabbar{
    background:#FAFAFA;
    border-top: 1px solid #EAEAEA;
  }
}
  
</style>
