<template>
  <div class="nav">
    <van-nav-bar
  :fixed='true'
  :title="title"
  left-arrow
  @click-left="onClickLeft"

/>
  </div>
</template>
<script>

export default {
  data(){
    return{
    }
  },
  props:{
   title:{
     required:true,
     type:String
   },
  },
  methods:{
  onClickLeft(){ 
      if(this.title==='购物车'){
         // 如果是商品页进入
        this.$router.push({name:'detail'})
      }else if(this.title==='商品分类'){
         this.$router.push({name:'home'})
      }else{
        // 如果直接菜单进入
        this.$router.go(-1)
      }
    
    },
  }
}
</script>
<style lang="less" scoped>

.nav/deep/.van-nav-bar__title{
    font-size: 16px;
    color: #666 !important;
    font-weight: 600;
  }
</style>