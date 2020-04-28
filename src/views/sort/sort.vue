<template>
  <div class="sort">
 <Header :title="title" />
<section class="view">
   <van-sidebar v-model="activeKey" @change="onChange">
   <van-sidebar-item v-for="(i,index) in list" :key='index'  :title="i.title"/>
   </van-sidebar>
   <router-view/>

</section>
  <!-- <Footer/> -->
  </div>
</template>
<script>
import Header from '@/components/common/header'
// import Footer from '@/components/footer' 
export default {
  components:{
    Header
  },
  data(){
    return{
           title:'商品分类',
           activeKey:'0',
           index:'22',
           name:'',
           list:[],
           data:[1,2,3]
    }
  },
  created(){
    this.activeKey='0'
   this.list=[ {
               title:'家用电器'
             },
             {
               title:'生活用品'
             },
              {
               title:'厨房家具'
             },
              {
               title:'数码产品'
             },
               {
               title:'宠物生活'
             },
               {
               title:'衣服鞋子'
             }]
  },
  watch:{
    index(index){
        switch (index) {
        case 0:
          this.name = '家用电器';
          break;
        case 1:
          this.name = '生活用品';
          break;
        case 2:
          this.name = '厨房家具';
          break;
        case 3:
          this.name = '数码产品';
          break;
        case 4:
          this.name = '宠物生活';
          break;
        case 5:
          this.name = '衣服鞋子';
          break; 
      } 
     }
  },
  methods:{
    onChange(index){
      this.index=index
     this.$store.commit('CHANGE_TABINDEX',index)
    setTimeout(() => {
       this.$router.push({ path: 'category', query: { id: index ,name:this.name}}).catch(err => {err})
    }, 1);
    }
  }
  
}
</script>
<style lang="less" scoped>
.sort{
  padding-top: 46px;
    .view {
    width: 100%;
    height: 100%;
    // background-color: pink;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}
.van-sidebar{
  position: fixed;
  z-index: 999;
}
  
</style>