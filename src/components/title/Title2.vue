<template>
  <div>
    <span></span>
    <span>{{ showData }}</span>
  </div>
</template>

<script>
export default {
  props: {
    showData: {
      type: String,
      default: "标题",
    },
  },
};
</script>

<style scoped lang="less">
div {
  display: flex;
  align-items: center;
  span {
    &:nth-child(1) {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      border: 2px solid #0072ff;
      margin:0  16px 0 10px ;
    }
    &:nth-child(2) {
      font-size: 16px;
      font-weight: 600;
      color: #0072ff;
    }
  }
}
</style>