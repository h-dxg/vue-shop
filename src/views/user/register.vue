<template>
  <div class="login">
    <Header :title="title" />
    <van-form>
      <van-field
        v-model="form.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          @click="onSubmit"
          native-type="submit"
        >
          注册
        </van-button>
      </div>
      <van-notice-bar
        text="tips：账号密码随便输入！"
        left-icon="volume-o"
      />
    </van-form>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import { register } from '@/api/login'
import { Notify } from 'vant';
export default {
  components: {
    Header
  },
  data () {
    return {
      title: '注册页面',
      form: {
        username: '',
        password: '',
      },
    }
  },
  mounted () {
  },
  methods: {
    onSubmit () {
      // 注册账号
      if (this.form.username !== "" && this.form.password !== "") {
        register({ ...this.form })
          .then(res => {
            console.log(res, 'res')
            if (res.data.code === 200) {
              Notify({ type: 'success', message: res.data.data.message });
              setTimeout(() => {
                this.$router.replace({
                  path: 'login'
                })
              }, 1000);
            } else {
              Notify({ type: 'danger', message: res.data.data.message });
            }

          }).catch((err) => {
            console.log(err)
          })

      } else {
        Notify({ type: 'danger', message: '账号密码不能为空' });
      }
    },
  }
}
</script>
<style lang="less" scoped>
.login {
  padding-top: 1.2rem;
  padding-bottom: 1rem;
}
</style>