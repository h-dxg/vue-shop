<template>
  <div>
    <div class="chose-view">
      <h1 class="chose-view-title">
       正宗土狗，哈士奇，柴犬，应有尽有，全国包邮 ~~
        <span>(已选 {{colText}} - {{sizeText}})</span>
      </h1>
      <span class="price">{{price}}￥</span>
      <p class="chose-view-intro">
        狗肉汤就是用狗肉炖成的汤。在狗肉汤饭店，所有的狗肉汤都是当天的新鲜肉一天一炖，没有老汤。这样做出来的狗肉汤叫清汤。
        </p>
    </div>
    <div class="choose">
           <div class="kind" >
              <span   
              :class="{active:colSelected===index}"
              @click="colChose(index)" 
              v-for="(i,index) in dog" 
              :key=index>
              {{i.dog}}</span>
           </div>
           <div class="kind">
                <span
                 :class="{active:sizeSelected===index}"
                 @click="sizeChose(index)" 
                 v-for="(i,index) in size" 
                 :key=index>
                 {{i.i}}</span>
           </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
        dog: [
      {
        dog: '哈士奇',
        img:'https://fc3tn.baidu.com/it/u=242513851,3394187877&fm=202&src=bqdata',
        choseBool:false
      },
      {
        dog: '柴犬',
        img:'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2760777502,416104808&fm=179&app=42&f=JPEG?w=121&h=121',
        choseBool:false
      },
      {
        dog: '拉布拉多',
        img:'https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2384725907,1500183723&fm=202&src=2000&mola=new&crop=v1',
        choseBool:false
      },
    ],
    size: [
      {
        i: '大狗'
      },
      {
        i: '中狗狗'
      },
      {
        i: '小狗狗'
      }
    ],
    name:'',
    img:'https://fc3tn.baidu.com/it/u=242513851,3394187877&fm=202&src=bqdata',
    pric:1234,
    choseBool:false,
    siz:'大狗'

    }
  },
 computed: mapState({
    colSelected: state => state.detail.colSelected,
    sizeSelected: state => state.detail.sizeSelected,
    // 返回当前选择颜色的值(下标)
    colText() {
      // 数据存在vuex
      return this.dog[this.colSelected].dog
    },
    // 返回当前选择规格的值(下标)
    sizeText() {
      return this.size[this.sizeSelected].i
    },
    price(){
      return 1000*this.sizeSelected+1234
    }

  }),
    methods: {
      colChose(index){
       this.$store.commit('CHANGE_COL_SELECTED', index);
       setTimeout(() => {
       this.name=this.colText
       this.img=this.dog[index].img
       this.choseBool=this.dog[index].choseBool
       }, 1);
      },
      sizeChose(index){
       this.$store.commit('CHANGE_SIZE_SELECTED', index);
       setTimeout(() => {
       this.pric=this.price
       this.siz=this.size[index].i
       }, 1);
       
      }
    },

}
</script>
<style lang="less" scoped>
.chose-view{
  padding: 0 15px;
  .chose-view-title{
    font-size: 16px;
    font-weight: normal;
  }
  .price{
    float: left;
    font-size: 20px;
    font-weight: 500;
    color: rgba(255, 0, 0, 0.829);
  }
  .chose-view-intro{
    display: block;
    margin-block-start: 1rem;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: normal;
    font-size: 14px;
    color:#969799;
  }
}
.choose{
  width: 100%;
  .kind{
    width: 100%;
    height: 1rem;
    margin-top: 15px;
    margin-left: -1rem;
    span{
      display: inline-block;
      width: 2rem;
      height: 0.8rem;
      margin-left: 15px;
      line-height: 0.8rem;
      color: rgba(0, 0, 0, 0.671);
      font-size: 13px;
      border: 1px solid #CCC;
      &.active,
      &:active {
         color: rgb(210, 147, 30);
         border: 1px solid rgb(210, 147, 30);
        transform: scale(1.1);
      }

    }
  }
}
  
</style>