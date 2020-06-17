<template>
  <div class="login">
   <Header :title="title" />
   <van-form >
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div    v-if='toggle' style="margin: 16px;">
    <van-button round block type="info" @click="onSubmit" native-type="submit">
    登录
    </van-button>
  </div>
   <div  v-if='!toggle' style="margin: 16px;">
    <van-button round block type="danger" @click="layout" native-type="submit">
     退出登录
    </van-button>
  </div>
  <van-notice-bar text="tips：账号密码随便输入！" left-icon="volume-o" />
</van-form>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import { Toast } from 'vant';
export default {
  components:{
    Header
  },
  data(){
    return{
      title:'登录页',
      username: '',
      password: '',
      toggle:this.$store.state.login.token?false:true
    }
  },
    mounted () {
    // 防止页面刷新后token丢失重新登录 
    if (this.$store.state.login.token === '') {
      this.$store.commit('CHANGE_TOKEN')
    }

  },
  methods:{
     onSubmit() {
      if(this.username!=="" && this.password!=="") {
        Toast('登录成功,存储token,跳转网页...');
        this.toggle = false;
        const token ='wang2020'
        this.$store.dispatch('setToken',token);
      }else {
        Toast('账号密码不能为空');
      }

      setTimeout(()=>{
        this.$router.replace({
          path: 'user'
        })
      },1000);
    },
    // 退出
    layout(){
    Toast('退出登录成功,清除token');
      this.$store.dispatch('clearToken');
      this.toggle = true;
      this.account = '';
      this.password = '';
    },
  }
}
</script>
<style lang="less" scoped>
.login{
   padding-top:1.2rem;
   padding-bottom: 1rem;
}

  
</style>