<template>
  <div class="main">
    <img :src="myHead" alt="" @click="goPage"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myHead: require("../../../assets/home3/health.png")
    }
  },
   methods: {
    goPage() {
      this.$router.push({ path: "/success" });
    }
  },
}
</script>

<style scoped lang="less">
.main{
  img{
    width: 100%;
  }
}
</style>