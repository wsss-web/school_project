<template>
    <div>
       <navigation left="back" title="编辑昵称" right='sure' @click.native="sure"></navigation>
       <div class="text">
  <Field placeholder="请输入要编辑的内容"   v-model="value"  @input="handInput"  maxlength="32"  clearable></Field>
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
      this.message = value
    },
    sure: function () {
      var nickname = this.value
      if (nickname !== '') {
        var that = this
        this.tools.axios({
          url: '' + this.tools.requrl + '/resetuser',
          method: 'get',
          params: {
            // 2 为修改昵称
            status: 2,
            nickname: nickname,
            username: localStorage.getItem('username')
          }
        })
          .then(
            function (res) {
              if (res.data.status === 2) {
                Dialog.confirm({
                  title: '提示',
                  message: '您已成功修改昵称'
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
      } else {
        this.$router.push('/my')
      }
    }
  }
}
</script>
<style lang="less" >
.text{
    margin-top:46px;
    .van-field__control{
        border:1px solid rgb(190,190,190);
        border-radius: .22rem;
            padding-left: 12px;
    }
}
</style>
