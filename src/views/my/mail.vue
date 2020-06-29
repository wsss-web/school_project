<template>
    <div>
       <navigation left="back" title="编辑邮箱" right='sure' @click.native="sure"></navigation>
       <div class="text">
  <Field placeholder="请输入要编辑的内容" style="maring-left:'12px'"  v-model="value"  @input="handInput"  maxlength="32"  clearable></Field>
       </div>
    </div>
</template>
<script>
import navigation from '../../component/navigation.vue'
import { Field, Dialog } from 'vant'
export default {
  data () {
    return {
      value: ''
    }
  },
  components: {
    navigation,
    Field,
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    handInput: function (value) {
      console.log(value)
    },
    sure () {
      var mail = this.value
      var username = localStorage.getItem('username')
      var that = this
      this.tools.axios({
        url: 'http://localhost:3000/resetuser',
        method: 'get',
        params: {
          // 3为修改邮箱
          status: 3,
          username,
          mail
        }
      })
        .then(
          function (res) {
            if (res.data.status === 3) {
              Dialog.confirm({
                title: '提示',
                message: '您已成功修改邮箱'
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
      console.log('666')
    }
  }
}
</script>
<style lang="less" scoped>
.text{
    margin-top:46px;
    .van-field__control{
        border:1px solid rgb(190,190,190);
        border-radius: .22rem;
    }
}
</style>
