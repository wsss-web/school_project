<template>
    <div>
      <navigation title="重设密码"></navigation>
      <div class="logo2">
        <img src="../../../public/img/96.png"/>
      </div>
       <div class="from">
          <vform validate-first @submit="onSubmit">
            <field
              v-model="newword"
              name="newword"
              label="输入新密码"
              placeholder="输入新密码"
            />
            <div style="margin: 16px;">
              <vbutton round block type="info" native-type="submit" @click="sure" style="letter-spacing: 15px;">
                提交
              </vbutton>
            </div>
          </vform>
        </div>
    </div>
</template>
<script>
import { Form, Button, field, Dialog } from 'vant'
import navigation from '../../component/navigation'
export default {
  name: 'newword',
  data () {
    return {
      newword: ''
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
    sure () {
      var address = localStorage.getItem('address')
      var cururl = '' + this.tools.requrl + '/newword?newword=' + this.newword + '&address=' + address + ''
      var that = this
      console.log(cururl)
      console.log(address)
      console.log(this.newword)
      if (this.newword === '') {
        Dialog.confirm({
          title: '提示',
          message: '请填写新密码'
        })
          .then(() => {
          })
          .catch(() => {
            // on cancel
          })
      } else {
        this.tools.axios({
          url: cururl,
          method: 'get'
        })
          .then(
            function (res) {
              console.log(res)
              Dialog.confirm({
                title: '提示',
                message: '您已成功修改密码'
              })
                .then(() => {
                  that.$router.push('/login')
                })
                .catch(() => {
                  that.$router.push('/login')
                })
            },
            function (err) {
              console.log(err)
            }
          )
      }
    }
  }
}
</script>
<style scoped  lang="less">
  .logo2{
    display: flex;
    justify-content: center;
    margin: 9.2rem 0px;
  }
   .from{
    border: none;
    margin-top: 0px;
  }
</style>
