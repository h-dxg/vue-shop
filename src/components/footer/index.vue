<template>
  <div>
  <van-tabbar v-model="active" class="foot" :safe-area-inset-bottom='true' @change="onChange">
  <van-tabbar-item name='home' icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item name='sort' icon="apps-o">分类</van-tabbar-item>
  <van-tabbar-item name='car' icon="cart-o">购物车</van-tabbar-item>
  <van-tabbar-item name='user' icon="friends-o">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:'home'
    }
  },
  created(){
  let Rname = this.$route.name;
  console.log('Rname',Rname);
  
      switch (Rname) {
        case 'home':
          this.active = 'home';
          break;
        case 'sort':
          this.active = 'sort';
          break;
        case 'car':
          this.active = 'car';
          break;
        case 'user':
          this.active = 'user';
          break;
      }
  },
  methods:{
      onChange(){
      this.$router.push({
              name: this.active
          })
      }
  }
}
</script>
<style lang="less">
.foot{
  margin-top: 10px;
}
  
</style>