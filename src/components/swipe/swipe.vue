<template>
  <div class="swipe">
     <van-swipe class="my-swipe" :autoplay="2000" style="height: 300px;"  >
            <van-swipe-item v-for="(i,index) in list" :key="index"><img width="100%" height="300px" :src="i.src" alt=""></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import con1 from "@/assets/1.jpeg";
import con2 from "@/assets/2.jpg";
import con3 from "@/assets/3.jpg";
export default {
  
  data(){
    return{
      list:[{src:con1},{src:con2},{src:con3}]
    }
  }
}
</script>
<style lang="less">
.swipe{
   overflow: hidden;
}
.my-swipe{
  overflow: hidden;
  img{
    margin-top: -2px;
  }
}
  
</style>