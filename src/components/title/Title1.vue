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
      width: 13px;
      height: 16px;
      background: #0072ff;
      border-radius: 0px 4px 4px 0px;
      margin-right: 10px;
    }
    &:nth-child(2) {
      font-size: 16px;
      font-weight: 600;
      color: #333333;
    }
  }
}
</style>