<template>
  <div>
    这是更换手机号界面
    <navigation title="绑定手机号" left="back"></navigation>
    <div class="num">
      <vform @submit="onSubmit">
        <field
          v-model="phone"
          name="newphone"
          label="新手机号"
          placeholder="新手机号"
        />
        <field v-model="pass"
          name="pass"
          label="验证码"
          placeholder="输入验证码">
        </field>
        <div class="send">
          <Button size="small" type="primary" @click.prevent="sendpass">发送验证码</Button>
        </div>
        <div>
          <Button round block type="info" native-type="submit" style="margin-top: 50px;" @click="sure">
            提交
          </Button>
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
      if (imitate === this.cur_pass.toString()) {
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
    }
  }
}
</script>

<style>
  .num{
    margin-top: 10rem;
  }
  .send>button{
    float: right;
  }
</style>
