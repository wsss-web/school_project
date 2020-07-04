<template>
  <div class="con">
    <div class="logo">
      <img src="../../../public/img/96.png" />
    </div>
    <div class="from">
       <vform validate-first @submit="onSubmit">
         <field
           v-model="username"
           name="username"
           label="输入用户名"
           placeholder="输入用户名"
         />
         <field
           v-model="password"
           type="password"
           name="password"
           label="输入密码"
           placeholder="输入密码"
         />
         <field
           v-model="address"
           name="adress"
           label="输入邮箱"
           placeholder="输入邮箱"
         />
         <div style="margin: 16px;">
           <vbutton round block type="info" native-type="submit" @click="apply">
             提交
           </vbutton>
         </div>
       </vform>
    </div>
  </div>
</template>
<script>
import { Form, Button, field, Dialog } from 'vant'
export default {
  name: 'apply',
  data () {
    return {
      username: '',
      password: '',
      address: ''
    }
  },
  components: {
    vbutton: Button,
    field,
    vform: Form,
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    apply () {
      var username = this.username
      var password = this.password
      var address = this.address
      var that = this
      console.log(username, password, address)
      console.log(this.tools)
      var cururl = '' + this.tools.requrl + '/apply?username=' + username + '&password=' + password + '&address=' + address + ''
      this.tools.axios({
        url: cururl,
        method: 'get'
      })
        .then(
          function (res) {
            if (res) {
              Dialog.confirm({
                title: '提示',
                message: '您已注册成功'
              })
                .then(() => {
                  that.$router.push('/login')
                })
                .catch(() => {
                  // on cancel
                })
              console.log('请求成功')
              console.log(res)
            }
          },
          function (err) {
            // eslint handle-callback-err: "warn"
            if (err) {
              console.log(err)
              Dialog.confirm({
                title: '提示',
                message: '您的账号或邮箱已存在！'
              })
                .then(() => {
                  that.$router.push('/login')
                })
                .catch(() => {
                  // on cancel
                })
            }
          }
        )
    }
  }
}
</script>
<style >
  .logo{
    display: flex;
    justify-content: center;
    margin: 1.6rem 0px;
  }
  .from{
    margin-top: 130px;
    border: 1px solid forestgreen;
  }
</style>
