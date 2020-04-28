<template>
  <div class="user">
    <router-link class="my-indent" :to="{ name: 'login'}">
    <van-nav-bar
        title="登录/注册"
        :fixed='true'
      />
    </router-link>
      <div class="main">
          <router-link class="my-indent" :to="{ name: 'pay'}">
              <span class="my-indent-left">我的订单</span>
              <div class="my-indent-right">
                  <span>全部订单</span>
                  <i class="icon-go"></i>
              </div>
          </router-link>

          <section class="my-pay">
            <li>
                  <span> <van-icon size='30px' name="bill-o" /></span>
                  <p>待付款</p>
            </li>
            <li>
                  <span> <van-icon size='30px' name="logistics" /></span>
                  <p>待收货</p>
            </li>
             <li>
                  <span> <van-icon size='30px' name="discount" /></span>
                  <p>退换修</p>
            </li>
          </section>

          <section class="my-vip">
            <!-- CSS样式图片代替 -->
              <img style="width:100%;height:100%;" src="@/assets/1111.png" alt="">
          </section>

      </div>
      <div class="end">
        --------------------到底了---------------------
      </div>

        <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/footer' 
export default {
  components:{
     Footer, 
  },
  data(){
    return{
    }
  }
}
</script>
<style lang="less" scoped>
.user{
   padding-top:1.2rem;
   padding-bottom: 1rem;
   .van-nav-bar{
     background-color: #f37d0f;
   }
  .end{
     clear: both;
    font-size: 14px;
    color: c8c9cc;
  }
   .main{
     padding: 10px;
     .my-indent{
       height: 50px;
     .my-indent-left{
       line-height:50px ;
       float: left;
       font-size: 16px;
       color: black;
     }
     .my-indent-right{
       line-height:50px ;
       float: right;
       font-size: 14px;
       color: #8c3e50;
     }
     }
     .my-pay{
       clear: both;
       height: 80px;
       li{
         list-style: none;
         line-height: 20px;
         float: left;
         width: 33%;
         font-size: 16px;
         color: #969799;
       }
     }
     .my-vip{
        clear: both;
        height: 100%;
     }

     
   }
}
 .user /deep/.van-nav-bar__title{
    font-size: 16px;
    color: #666 !important;
    font-weight: 700;
  
  }

  
</style>