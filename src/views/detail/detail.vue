<template>
  <div class="detail">
  <van-nav-bar
  title="详情页"
  :fixed='true'
  left-arrow
  @click-left="onClickLeft"
/>
<van-swipe @change="onChange">
  <van-swipe-item style="height: 300px;"><img width="100%" height="300px" src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1135552721,2209127328&fm=26&gp=0.jpg" alt=""></van-swipe-item>
  <van-swipe-item style="height: 300px;"><img width="100%" height="300px" src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3259570935,3337890453&fm=26&gp=0.jpg" alt=""></van-swipe-item>
  <van-swipe-item style="height: 300px;"><img  width="100%" height="300px" src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3379305682,2585413188&fm=26&gp=0.jpg" alt=""></van-swipe-item>
  <template #indicator>
    <div class="custom-indicator">
      {{ current + 1 }}/3
    </div>
  </template>
</van-swipe>

<Section ref="a"  />
<Section2/>

<div style="margin-top:20px;font-size:20px;color:#ccc">
  ----------------到底了-----------------
</div>

<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服"  />
  <van-goods-action-icon icon="cart-o" text="购物车" @click="goCar" :badge="count" />
  <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
  <van-goods-action-button type="warning" @click="addCar" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
  </div>
</template>
<script>
import Section from '@/components/detail/section' 
import Section2 from '@/components/detail/section2' 
import { Dialog } from 'vant';

export default {
  components:{
Section,Section2
  },
  data(){
    return{
      current: 0,
      product:[]
    }
  },
  computed:{
    count () {
      //页面刷新后 数据会消失,解决:加判断
      if (this.$store.state.detail.count == 0) {
        this.$store.commit('CHANGE_COUNT');
      }
      return this.$store.state.detail.count
    },
  },
  methods:{
    onClickLeft(){
      this.$router.push({name:'sort'})
    },
    onChange(index) {
      this.current = index;
    },
    // 加购物车
    addCar(){
      const that=this
      setTimeout(() => {
        // eslint-disable-next-line no-unused-vars
        var name
        var img=that.$refs.a.img
        var pric=that.$refs.a.pric
        var choseBool =that.$refs.a.choseBool
        var size =that.$refs.a.siz

        if(!that.$refs.a.name){
          name='哈士奇'
        }else{
         name=that.$refs.a.name
        }
      Dialog.confirm({
            title: '标题',
            message: `<span>商品名称：${name}<span>`,
        })
      .then(() => {
        this.product.push({name:name,img:img,pric:pric,choseBool:choseBool,size:size})
        this.$store.dispatch('setLocalCount', true);
        this.$store.dispatch('addCarList', this.product);
        // 购物车数量
      })
      .catch(() => {
      });
      }, 0); 
    },
    // 去购物车页面
    goCar(){
       this.$router.push({name:'car'})
    }
  }
}
</script>
<style lang="less" >
.detail{
  padding-top: 1.2rem;
  padding-bottom: 1.5rem;

.van-nav-bar__title{
  font-size: 15px;
  color:orange;
  font-weight: 600;
}
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
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
  
  }
  
</style>