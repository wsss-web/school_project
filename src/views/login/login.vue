<template>
  <div class="login">
    <!-- <div class="login_head">
      <span>登录</span>
    </div> -->
    <navigation title="登录"></navigation>
    <div class="tu">
      <img class="logo" src="../../../public/img/96.png" />
    </div>
    <vform @submit="onSubmit">
      <field
        v-model="username"
        name="user_name"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <vbutton round block type="info" native-type="submit" @click="login">提交</vbutton>
      </div>
    </vform>
    <div class="bottom">
      <div class="apply">
        <span @click="apply">没有账号？</span>
      </div>
      <div class="forget">
        <span @click="forget">忘记密码？</span>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from '../../component/navigation'
import { Form, Button, field, Dialog } from 'vant'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    vbutton: Button,
    field,
    vform: Form,
    [Dialog.Component.name]: Dialog.Component,
    navigation
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    login () {
      var name = this.username
      var password = this.password
      localStorage.setItem('username', name)
      localStorage.setItem('password', password)
      var that = this
      const cururl = '' + this.tools.requrl + '/login?username=' + name + '&password=' + password + ''
      this.tools
        .axios({
          url: cururl,
          method: 'get'
        })
        .then(
          function (res) {
            console.log('请求成功')
            console.log(res)
            if (res.data.status === 1) {
              that.$router.push('/index')
            } else if (res.data.status === 0) {
              Dialog.confirm({
                title: '提示',
                message: '账号不存在或密码错误'
              })
                .then(() => {
                  // on confirm
                })
                .catch(() => {
                  // on cancel
                })
            }
          },
          function (err) {
            console.log('请求失败')
            console.log(err)
          }
        )
    },
    apply () {
      this.$router.push('/register')
    },
    forget () {
      this.$router.push('/forget')
    }
  }
}
</script>

<style scoped>
.tu{
  display: flex;
  justify-content: center;
  margin: 1.6rem 0px;
}

.login_head {
      width: 100%;
      height: 50px;
      background-color: rgb(69, 188, 228);
      border-radius: 5px;
}
.login_head span {
  margin-left: 180px;
  text-align: center;
  font-size: 20px;
  line-height: 48px;
  color: rgb(221, 252, 252);
  letter-spacing: 5px;
}
.bottom{
  display: flex;
  height:50px;
  text-align: center;
}
.apply{
  flex: 1;
}
span{
  line-height: 50px;
}
.forget{
  flex: 1;
}
</style>
