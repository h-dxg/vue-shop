<template lang="html">
  <section class="content">
    <div class="img-wrap" v-for="(k,index) in content"  :key="index">
      <img :src="k.src">
    </div>
  </section>

</template>

<script>
export default {
data(){
  return{
    content:[
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }, {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }
       , {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }
       , {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       },
        {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }, {
         src:'https://img.yzcdn.cn/vant/cat.jpeg'
       }
    ]
  }
}
}
</script>

<style lang="less" scoped>
  .content {
    width: 100%;
    margin-top: 10px;
    border-top: 20px solid #F8FCFF;
    .img-wrap {
    height: 300px;
    margin-top: 12px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
