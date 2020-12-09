<template>
  <div id="app">
    <router-view>
     
    </router-view>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
  </div>
</template>

<style>
#app {
  width: 100%;
  box-sizing: border-box;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
   font-family: PingFangSC-Semibold, PingFang SC;
  /* 清晰 */
  -webkit-font-smoothing: antialiased;
  /* 锯齿 */
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
