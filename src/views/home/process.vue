<template>
  <div>
    <navigation title="反馈进度" left="back"></navigation>
    <div class="process">
      <Steps :active="active">
        <Step>申请提交</Step>
        <Step>管理员已查阅</Step>
        <Step>管理员正在处理</Step>
        <Step>问题已解决</Step>
      </Steps>
    </div>
    <div class="btn" style="text-align: center; margin-top: 20px;">
      <Button @click="sure" type="primary" style="margin: 0,auto;">确认</Button>
    </div>
  </div>
</template>

<script>
import navigation from '../../component/navigation.vue'
import { Step, Steps, Dialog, Button } from 'vant'
export default {
  data () {
    return {
      // list: [],
      active: 0
    }
  },
  components: {
    navigation,
    Step,
    Steps,
    [Dialog.Component.name]: Dialog.Component,
    Button
  },
  created () {
    var that = this
    var onedata = {
      username: localStorage.getItem('username'),
      status: 'select'
    }
    this.tools.axios.post('http://localhost:3000/question', {
      onedata
    })
      .then(
        function (res) {
          console.log(res)
          that.active = parseInt(res.data.status)
          localStorage.setItem('isstatus', that.active)
          // if (res.data.status === '3') {
          //   Dialog.confirm({
          //     title: '提示',
          //     message: '您已成功解决问题，快去抽奖吧'
          //   })
          //     .then(() => {
          //       that.$router.push('/xyzn')
          //     })
          //     .catch(() => {
          //       // on cancel
          //     })
          // }
        //   if (res.data.status === '0') {
        //     that.list.push('申请提交')
        //     console.log(0)
        //   }
        //   if (res.data.status === '1') {
        //     that.list.push('申请提交', '管理员已查阅')
        //     console.log(1)
        //   }
        //   if (res.data.status === '2') {
        //     that.list.push('申请提交', '管理员已查阅', '管理员正在处理')
        //     console.log(2)
        //   }
        //   if (res.data.status === '3') {
        //     that.list.push('申请提交', '管理员已查阅', '管理员正在处理', '问题已解决')
        //     console.log(3)
        //   }
        },
        function (err) {
          console.log(err)
        }
      )
  },
  methods: {
    sure () {
      console.log('666')
      if (this.status === 3) {
        Dialog.confirm({
          title: '提示',
          message: '您已成功解决问题，快去抽奖吧'
        })
          .then(() => {
            this.$router.push('/xyzn')
          })
          .catch(() => {
            this.$router.push('/xyzn')
          })
      } else {
        Dialog.confirm({
          title: '提示',
          message: '完成所有步骤才能抽奖哦'
        })
          .then(() => {
            // this.$router.push('/xyzn')
          })
          .catch(() => {
            // this.$router.push('/xyzn')
          })
      }
    }
  }
}
</script>

<style scoped>
  .process{
    margin-top: 230px;
  }
</style>
