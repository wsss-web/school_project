<template>
    <div>
      <div class="logo">
        <img src="../../../public/img/96.png" />
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
              <vbutton round block type="info" native-type="submit" @click="sure">
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
    [Dialog.Component.name]: Dialog.Component
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
                // on cancel
              })
          },
          function (err) {
            console.log(err)
          }
        )
    }
  }
}
</script>
<style lang="less">
  .logo{
    display: flex;
    justify-content: center;
    margin: 4.6rem 0px;
  }
  .from{
    margin-top: 130px;
    border: 1px solid forestgreen;
  }
</style>
