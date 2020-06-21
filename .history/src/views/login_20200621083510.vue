<template>
  <div class="login">
    <div class="login_head">
      <span>登录</span>
    </div>
    <div class="tu">
 <img class="logo" src="../../public/img/96.png" />
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
  </div>
</template>

<script>
import { Form, Button, field } from 'vant'
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
    vform: Form
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    login () {
      var name = this.username
      var password = this.password
      var that = this
      const cururl =
        'http://localhost:3000/login?username=' +
        name +
        '&password=' +
        password +
        ''
      this.tools
        .axios({
          url: cururl,
          method: 'get'
        })
        .then(
          function (res) {
            console.log('请求成功')
            console.log(res)
            if (res.data === 1) {
              that.$router.push('/index')
            }
          },
          function (err) {
            console.log('请求失败')
            console.log(err)
          }
        )
    }
  }
}
</script>

<style>
.login {
/*  margin-top: 90px; */
}

.logo {
  margin-left: 155px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.tu{
  margin:auto;
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
</style>
