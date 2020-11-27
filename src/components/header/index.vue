<template>
  <div class="header">
    <div class="title"> 品 西 西</div>
    <van-icon
      style="position:absolute;right:0.2rem;top:0.4rem "
      name="search"
    />
  </div>
</template>
<style lang="less">
.header {
  position: fixed;
  width: 100%;
  z-index: 9999;
  height: 1.2rem;
  background-color: rgb(255, 133, 42);
  font-size: 0.5rem;
  line-height: 1.2rem;
  margin: 0 auto;
  .title {
    color: #ffffff;
    font-size: 0.4rem;
    //  font-weight: 700;
    text-align: center;
  }
}
</style>