<template>
  <div>
    这是更换手机号界面
    <navigation title="绑定手机号" left="back"></navigation>
    <div class="num">
      <vform @submit="onSubmit">
        <field v-model="phone" name="newphone" label="新手机号" placeholder="新手机号" />
        <field v-model="pass" center clearable name="pass" label="验证码" placeholder="输入验证码">
                  <template #button>
          <Button size="small" type="primary" @click.prevent="sendpass">发送验证码</Button>
        </template>
        </field>
      <div class="bottom">
 <Button type="primary" size="large" @click="sure">提交</Button>
    </div>
      </vform>
    </div>
  </div>
</template>

<script>
import navigation from '../../component/navigation.vue'
import { Button, Form, field, Dialog } from 'vant'
export default {
  data () {
    return {
      phone: '',
      pass: '',
      cur_pass: ''
    }
  },
  components: {
    navigation,
    Button,
    vform: Form,
    field,
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    sendpass () {
      var that = this
      this.tools.axios({
        url: '' + this.tools.requrl + '/imitate',
        method: 'get'
      })
        .then(
          function (res) {
            that.cur_pass = res.data
            console.log(res)
          },
          function (err) {
            console.log(err)
          }
        )
    },
    sure () {
      var newphone = this.phone
      var imitate = this.pass
      var that = this
      if (imitate === this.cur_pass.toString() && newphone !== '' && imitate !== '') {
        this.tools.axios({
          url: '' + this.tools.requrl + '/resetuser',
          method: 'get',
          params: {
            // 1 为修改手机号
            status: 1,
            phone: newphone,
            username: localStorage.getItem('username')
          }
        })
          .then(
            function (res) {
              if (res.data.status === 1) {
                Dialog.confirm({
                  title: '提示',
                  message: '您已成功修改手机号'
                })
                  .then(() => {
                    that.$router.push('/my')
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
      }
      if (imitate !== this.cur_pass.toString()) {
        Dialog.confirm({
          title: '提示',
          message: '验证码不正确'
        })
          .then(() => {
            // that.$router.push('/my')
          })
          .catch(() => {
            // on cancel
          })
      }
      if (newphone === '' || imitate === '') {
        Dialog.confirm({
          title: '提示',
          message: '请把信息填写完整'
        })
          .then(() => {
            // that.$router.push('/my')
          })
          .catch(() => {
            // on cancel
          })
      }
    }
  }
}
</script>

<style scoped lang="less">
.num {
  margin-top: 10rem;
}
.send > button {
  float: right;
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
