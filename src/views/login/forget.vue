<template>
  <div class="con">
    <navigation left="back" title="忘记密码"></navigation>
    <div class="logo">
      <img src="../../../public/img/96.png" />
    </div>
    <vform validate-first @submit="onSubmit" style="margin-top: 7rem;">
      <div class="add">
        <div class="wa">
          <field v-model="address" name="address" label="请输入邮箱" placeholder="请输入注册邮箱" autosize/>
        </div>
        <div class="yanzheng">
          <field v-model="word" name="word" label="请输入验证码" placeholder="请输入验证码" autosize />
          <vbutton type="info" class="yanzheng" :class="{disabled: !this.canClick}" @click="sure($event),countDown($event)">{{content}}</vbutton>
        </div>
        <div style="margin: 16px;">
          <vbutton round block type="info" native-type="submit" @click="bbb" style="letter-spacing: 15px;font-size: 15px;">
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
import navigation from '../../component/navigation'
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
    [Dialog.Component.name]: Dialog.Component,
    navigation
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
      var cururl = '' + this.tools.requrl + '/identify?address=' + address + ''
      this.tools.axios({
        url: cururl,
        method: 'get'
      })
        .then(
          function (res) {
            console.log(res)
            if (res.data.status !== 1) {
              Dialog.confirm({
                title: '提示',
                message: '邮箱不存在！'
              })
                .then(() => {})
                .catch(() => {
                  // on cancel
                })
            } else {
              that.word2 = res.data.code
            }
          },
          function (err) {
            console.log(err)
          }
        )
    },
    bbb () {
      this.word2 = this.word2.toString()
      console.log(this.word)
      console.log(this.word2)
      if (this.word === this.word2 && this.word !== '' && this.word2 !== '') {
        console.log('跳')
        this.$router.push('/newword')
      }
      if (this.word !== this.word2) {
        Dialog.confirm({
          title: '提示',
          message: '验证码错误！'
        })
          .then(() => {})
          .catch(() => {
            // on cancel
          })
      }
      if (this.word === '' || this.word2 === '') {
        Dialog.confirm({
          title: '提示',
          message: '请填写验证码！'
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
        // console.log(that.totalTime)
        that.content = that.totalTime + 's后重新发送'
        // console.log(that.content)
        // console.log(that)
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
<style>
  .logo {
    display: flex;
    justify-content: center;
    margin: 4.5rem 0px;
  }

 .con {
    margin-top: 150px;
  }
  .wa>span{
    font-size: 20px;
  }
  .add {
    margin-top: 30px;
    margin-bottom: 30px;
  }
 .yanzheng {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    margin-right: 0.625rem;
  }
  .disabled{
   border-color: #ddd;
   color: #57a3f3;
   cursor: not-allowed;
  }
</style>
