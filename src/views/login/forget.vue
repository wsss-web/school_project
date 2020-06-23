<template>
  <div class="con">
    <div class="logo">
      <img src="../../../public/img/96.png" />
    </div>
    <vform validate-first @submit="onSubmit">
      <div class="add">
        <field v-model="address" name="address" label="请输入邮箱" placeholder="请输入注册邮箱" />
        <div class="yanzheng">
          <field v-model="word" name="word" label="请输入验证码" placeholder="请输入验证码" />
          <vbutton type="info" class="yanzheng" :class="{disabled: !this.canClick}" @click="sure($event),countDown($event)">{{content}}</vbutton>
        </div>
        <div style="margin: 16px;">
          <vbutton round block type="info" native-type="submit" @click="bbb">
            提交
          </vbutton>
        </div>
      </div>
    </vform>
  </div>
</template>
<script>
import {
  Form,
  Button,
  field,
  Dialog
} from 'vant'
export default {
  data () {
    return {
      address: '',
      word: '',
      word2: '',
      content: '发送验证码',
      totalTime: 10,
      canClick: true
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
      // console.log('777')
    },
    sure () {
      var that = this
      var address = this.address
      localStorage.setItem('address', address)
      var cururl = 'http://localhost:3000/identify?address=' + address + ''
      this.tools.axios({
        url: cururl,
        method: 'get'
      })
        .then(
          function (res) {
            console.log(res)
            that.word2 = res.data.code
          },
          function (err) {
            console.log(err)
          }
        )
    },
    bbb () {
      this.word2 = this.word2.toString()
      if (this.word === this.word2) {
        this.$router.push('/newword')
      } else {
        Dialog.confirm({
          title: '提示',
          message: '验证码错误或邮箱不存在！'
        })
          .then(() => {})
          .catch(() => {
            // on cancel
          })
      }
    },
    countDown () {
      if (!this.canClick) return
      this.canClick = false
      this.content = this.totalTime + 's后重新发送'
      var that = this
      const clock = window.setInterval(() => {
        that.totalTime--
        console.log(that.totalTime)
        that.content = that.totalTime + 's后重新发送'
        console.log(that.content)
        console.log(that)
        if (that.totalTime <= 0) {
          window.clearInterval(clock)
          that.content = '重新发送验证码'
          that.totalTime = 10
          that.canClick = true
        }
      }, 1000)
    }
  }
}
</script>
<style lang='less'>
  .logo {
    display: flex;
    justify-content: center;
    margin: 1.6rem 0px;
  }

  .con {
    margin-top: 150px;
  }

  .add {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .yanzheng {
    display: flex;
    justify-content: center;
  }
  .disabled{
   border-color: #ddd;
   color:#57a3f3;
   cursor: not-allowed; // 鼠标变化
  }
</style>
