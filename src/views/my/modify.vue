<template>
    <div>
        <navigation left="back" title="修改密码"></navigation>
        <div class="form">
          <vform @submit="onSubmit">
             <field v-model="password"
               name="password"
               label="旧密码"
               placeholder="输入旧密码">
             </field>
             <field v-model="newword"
               name="newword"
               label="新密码"
               placeholder="输入新密码">
             </field>
             <field v-model="newword2"
               name="newword"
               label="重复输入密码"
               placeholder="请重复输入密码">
             </field>
     <div class="bottom">
 <Button type="primary" size="large" @click="sendword">提交</Button>
    </div>
          </vform>
        </div>
    </div>
</template>
<script>
import navigation from '../../component/navigation'
import { Form, Field, Button, Dialog } from 'vant'
export default {
  data () {
    return {
      password: '',
      newword: '',
      newword2: ''
    }
  },
  components: {
    navigation,
    vform: Form,
    field: Field,
    Button,
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
      console.log('6666')
    },
    sendword () {
      var newword = this.newword
      var username = localStorage.getItem('username')
      var password = localStorage.getItem('password')
      var that = this
      console.log(this.password)
      console.log(password)
      if (this.password === password && this.newword === this.newword2) {
        this.tools.axios({
          url: '' + this.tools.requrl + '/resetuser',
          method: 'get',
          params: {
            // 4为修改密码
            status: 4,
            username,
            newword
          }
        })
          .then(
            function (res) {
              if (res.data.status === 4) {
                Dialog.confirm({
                  title: '提示',
                  message: '您已成功修改密码'
                })
                  .then(() => {
                    that.$router.push('/login')
                  })
                  .catch(() => {
                    // on cancel
                  })
              }
            },
            function (err) {
              console.log(err)
            }
          )
      } else {
        Dialog.confirm({
          title: '提示',
          message: '您已输入的密码错误或两次密码不统一'
        })
          .then(() => {
          })
          .catch(() => {
            // on cancel
          })
      }
      console.log('666')
    }
  }

}
</script>
<style lang="less" >
.form{
    margin-top:80px;
}
.bottom{
     margin: 10px 16px 80px 16px;
     background-color:#45bce4;
     border-radius: 0.3rem;
     .van-cell::after{
    border-bottom:none;
}
.van-button--primary{
    background:rgb(69,188,228);
    border:1px solid rgb(69,188,228);
    height: 2rem;
    border-radius: .3rem;
}
}
</style>
