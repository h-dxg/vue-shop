<template>
  <div class="pay">
      <van-nav-bar
        title="订单详情"
        :fixed='true'
        left-arrow
        @click-left="onClickLeft"
      />
    <div class="pay-address">
      <div>
        <p class="main-address-per">收货人:<span>王先生</span></p>
        <p class="main-address-tel">电话: <span>12345678911</span></p>
      </div>
      <p class="address">收货地址：河南省郑州市中原区秦岭路8号院59号单元28层15号东户第三家</p>
      <!-- <div class="address" >收货地址:<p>河南省郑州市中原区秦岭路8号院59号单元28层15号东户第三家</p></div> -->
    </div>
  <div class="list" v-if="list"> 
     <div v-for="(i,index) in carList " :key='index' >
      <van-card
      num="1"
      :price="i.pric"
      :desc="i.name"
      :title="i.size"
      :thumb="i.img"
    />
   </div>
   <div>
      <h3 class="pay-allpay">总需要支付 : <i>￥</i><span>{{allpay}}</span></h3>
   </div>
  </div>
  <div v-if="!list" >
<van-empty style="width:100%;height:100%" description="订单为空" />
  </div>
     <van-overlay :show="show"  >
          <div class="wrapper" @click='click'>
           <div class="block">
             <img width="100%" height="100%" src="@/assets/er.jpg" alt="">
           </div>
          </div>
     </van-overlay>
    <van-button round  size='large' @click="pay" type="danger" :disabled="disabled">立即支付</van-button>
  </div>
</template>
<script>
import { Toast } from 'vant';
export default {
  data(){
    return{
      show:false,
      list:true,
      disabled:false,
    }
  },
    computed: {
    //所有商品列表
    carList () {
      if(this.$store.state.detail.selectedList===null ){
        return false
      }else{
    if (this.$store.state.detail.selectedList.length===0  ){
        return this.$store.state.detail.allist
      }else{
        return this.$store.state.detail.selectedList
      }
      }
    },

    // 商品价格总和
    allpay () {
      let allpay = 0, selectedList = this.carList
      for (let i = 0; i < selectedList.length; i++) {
        allpay += selectedList[i].pric
      }
      return allpay
    }
  },
    mounted () {
    // 防止页面刷新后数据丢失
      //  this.$store.commit('SET_ALL')
    if (this.$store.state.detail.selectedList == '') {
      this.$store.commit('SET_SELECTEDLIST')
      this.$store.commit('SET_ALL')
    }

  },
  methods:{
    onClickLeft(){
    this.$router.go(-1)
    },
    click(){
    if(this.$store.state.detail.count!==0){
       this.show=false
       const that=this
      // eslint-disable-next-line no-unused-vars
      const toast = Toast.loading({
          duration: 2000, // 持续展示 toast
          forbidClick: true,
          message: `支付成功${this.allpay}元`,
          // 结束时候的回调 删除已经支付的商品
          onClose(){
            that.list=false
            that.disabled=true
            that.$store.dispatch('resetCarList'); //重置购物车（用unSelectedList替换）
            that.$store.dispatch('resetCount'); //重置购物车数量
            // 如果是全选进入的
            if(that.$store.state.detail.selectedList.length===0){
            that.$store.dispatch('resetAll'); //如果是全选的话 重置购物车（用unSelectedList替换）
            that.$store.dispatch('resetCountAll'); //如果是全选的话 重置购物车数量
            }
           
          }
      })
    }
    },
    // 支付
    pay(){
       this.show=true
    }
  }
}
</script>
<style lang="less"  scoped>
.pay{
    padding-top: 1.2rem;
    padding-bottom: 1.5rem;
    .pay-address{
      height: 130px;
      padding: 10px;
      // background-color: pink;
      border-bottom: 1px solid #cccccc;
      .main-address-per{
        font-size: 16px;
        color:#868686;
        float: left;
      }
      .main-address-tel{
        font-size: 16px;
        color:#868686;
        margin-right: 20px;
        float: right;
      }
      .address{
        // overflow: hidden;
        font-size: 16px;
        float: left;
        color:#868686;
        padding: 10px;
        margin-left: -13px;
      }
    }
    .pay-allpay{
      text-align: right;
      padding: 0 15px;
    }
    
}
 .pay/deep/.van-nav-bar__title{
    font-size: 16px;
    color: #666 !important;
    font-weight: 600;
  }
  .van-button{
    position: fixed;
    bottom: 0.8rem;
    left: 0%;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>