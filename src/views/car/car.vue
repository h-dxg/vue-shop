<template>
  <div class="car">
     <Header :title="title" />
<div v-if="car">
   <!-- <van-checkbox-group v-model="result" ref="checkboxGroup"> -->
<van-row  v-for="(i,index) in carList" :key="index">
    <van-col span="2"> 
        <van-checkbox  v-model="i.choseBool" @click="toggle" ref="checkbox"></van-checkbox>   
    </van-col>
    <van-col span="22">    
      <van-swipe-cell class="a">
          <van-card
            num="1"
            :price="i.pric"
            :title="i.name"
            desc="名贵犬类 这样做出来的狗肉汤叫清汤"
            class="goods-card"
            :thumb="i.img"
          >i.siez
          <template #footer>
           <span class="size"> 尺寸：{{i.size}}</span>
          </template>
          </van-card>
        <template #right>
          <van-button square text="删除" type="danger" @click="delet(i)" class="delete-button" />
        </template>
         
      </van-swipe-cell> 
    </van-col>
</van-row>
<!-- </van-checkbox-group> -->
</div>
<router-link :to="{name:'sort'}">
  <van-empty v-if="!car" description="购物车为空，请点击去选择商品" />
</router-link>

 <!-- 总价格判断，如果点击单选获取的计算属性值，如果全选获取的是方法list里面所有价格的和 -->
  <van-submit-bar  :price="state===1? a:allpay" button-text="提交订单" @submit="onSubmit">

  <van-checkbox v-model="checked" @change='change' id="checked">全选</van-checkbox>
  <template #tip>
    你的收货地址不支持同城送, <span >修改地址</span>
  </template>
</van-submit-bar>

  </div>
</template>

<script>
import Header from '@/components/common/header'
import { Notify } from 'vant';
import { Toast } from 'vant';
// eslint-disable-next-line no-unused-vars
var that;
export default {
  components:{
    Header
  },
  data(){
    return{
      state:0,
      title: '购物车',
      a:0,
      car:true,
      result:[],
      checked:false
    }
  },


  computed: {
     carList () {
      return this.$store.state.detail.carList;
    }, 
     //勾选的商品的价格总和
    allpay :{
       get ()  {  
         let all = 0;
      // 如果有勾选商品,计算总价格
      if (this.$store.getters.selectedList ) {
        for (let i = 0; i < this.$store.getters.selectedList.length; i++) {
          all += +((this.$store.getters.selectedList[i].pric)*100);
        }
      }
      // 没有勾选 即为0
      return all
      }, 
    }
  },
    mounted() {
    // 初始化先获取购物车商品列表 否则 页面刷新出Bug
    if (this.$store.state.detail.carList == "") {
         this.$store.commit('RESET_CARLIST')
     }
  },
  created(){
      this.$store.commit('RESET_CARLIST')
  },
  methods:{
    onSubmit(){
          // 如果有选择商品才能跳转
      if (this.$store.getters.selectedList.length||(this.checked===true&&this.$store.state.detail.carList.length>0)) {
        // 保存+缓存选择的商品 ,在支付页能用到
        this.$store.dispatch('setSelectedList')
        Toast.loading({
          message: '请稍后...',
          forbidClick: true,
        });
        setTimeout(()=>{
            this.$router.push({name:'pay'})
        },1500)
      } else {
        Notify({
            message: '你还没有选择商品',
            color: 'red',
            background: '#ffe1e1',
          });
      }
    },
    toggle(){
      this.state=0
    // 每点击一下都会改变choseBool的布尔值,所以要重置数组
      this.$nextTick(() => {
        this.$store.dispatch('cutCarList', this.carList)
      })
    },
    // 删除   
    delet(i){
          // 点击删除，重置数组
        let newCarList = [];
        this.carList.forEach(ele=>{
          if (ele!==i){
            newCarList.push(ele)
          }
        })
      //点击删除 把商品数量count-1
      this.$store.dispatch('setLocalCount', false);
      this.$store.dispatch('cutCarList', newCarList);
       
    },
    // 全选
    change(e){
      this.state=1
      const a=[]
       if(e){
        this.$store.state.detail.carList.forEach(i=>{
            a.push(i.pric) 
         })
       }
        let cont =0
       a.forEach(i=>{
         // eslint-disable-next-line no-unused-vars
           cont += i
       })
       this.a = cont*100 //全选得出的总价
        // eslint-disable-next-line no-unused-vars
       this.$nextTick(() => {
         const data=this.$store.state.detail.carList
         this.$store.dispatch('setALL',data) //全选获取的数据存在浏览器中
      })
    }

  }

}
</script>
<style lang="less" scoped>
.car{
  padding-top: 1.2rem;
  padding-bottom: 1.5rem;
  .van-checkbox{
    margin: 38px 0 0px 10px;
  }
   .a/deep/.van-swipe-cell__right {
    position: absolute;
    top: 25% !important;
    height: 100%;
  }
   .van-card__title{
     color:chocolate;
     font-size: 16px;
     font-weight: 500;
     margin-bottom: 15px;
   }
   #checked{
     margin-top: 0px;
   }
}
  
</style>