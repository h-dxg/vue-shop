<template>
  <div class="home">
    <van-row>
  <van-col span="24"><Header/></van-col>
</van-row>
  <swipe/>
  <div class="service">
    <ul>
      <li><van-icon name="passed"/><span>自营品牌</span></li>
      <li><van-icon name="passed"/><span>无忧退货</span></li>
      <li><van-icon name="passed"/><span>48小时快速退款</span></li>
    </ul>
  </div>
   <Section1/>
   <br> 
   <Section2/>
   <br>
   <Section3/>
   <Section4/>
    <Footer/>
  </div>
</template>
<script> 
import Header from '@/components/header'
import swipe from '@/components/swipe/swipe' 
import Footer from '@/components/footer' 
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'

export default {
  components:{
     Header,
     swipe,
     Footer,
     Section1,
     Section2, 
     Section3,
     Section4
  }
} 
</script>
<style lang="less">
.home{
  padding-bottom:1.2rem;
  padding-bottom: 1rem;
}
  .my-swipe .van-swipe-item {
    border-top:1px solid rgb(255, 212, 192);
    margin-top: 1.2rem;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .service{
        ul {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      justify-content: space-around;

      li {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        align-items: center;
        padding: 0.3rem 0;
        span {
          font-size: 0.3rem;
          padding-left: 0.3rem;
        }
        i {
          font-size: 0.5rem;
        }
      }
    }
  }
  
</style>