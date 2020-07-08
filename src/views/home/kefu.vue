<template>

    <div>
        <navigation title="客服" left="back"></navigation>
        <div class="tou1">问题和意见：</div>
        <Form @submit="onSubmit">
        <Field
          rows="2"
          autosize
          v-model="data.message"
          name="message"
          type="textarea"
          label="输入问题描述"
          placeholder="输入问题简要描述,客服小帆会为您尽快处理"
        />
        <div class="tou1">联系方式</div>
        <Field
          v-model="data.stu_id"
          name="stuid"
          label="学号"
          placeholder="您的学号"
          readonly
        />
        <Field
          v-model="data.name"
          name="name"
          label="姓名"
          placeholder="您的姓名"
          readonly
        />
        <Field
          v-model="data.phone"
          name="phone"
          label="联系方式"
          placeholder="您的手机号"
          readonly
        />
        <Field v-model="data.time" name="time" label="回访时间" placeholder="请输入方便联系的时间" @click="show = true"></Field>
          <Popup v-model="show" position="bottom">
           <DatetimePicker
              v-model="currentDate"
              type="date"
              title="选择年月日"
              :min-date="minDate"
              :max-date="maxDate"
              @cancel="show = false"
              @confirm="onConfirm"
            />
          </Popup>
        <div style="margin: 16px;">
          <Button round block type="info" native-type="submit">
            提交
          </Button>
        </div>
        </Form>
        <div class="btn" style="text-align: center; margin-top: 20px;">
          <Button @click="look" type="primary" style="margin: 0,auto;">查看处理进度</Button>
        </div>
    </div>

</template>

<script>
import navigation from '../../component/navigation.vue'
import { Field, Button, Form, DatetimePicker, Popup, Toast, Dialog } from 'vant'
export default {
  name: 'kefu',
  components: {
    Field,
    // Cell,
    // CellGroup,
    Button,
    Form,
    navigation,
    DatetimePicker,
    Popup,
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    // onClickLeft () {
    //   this.$router.push({ path: '/index' })
    // },
    // onClickRight () {
    // },
    onSubmit (values) {
      // console.log('submit', values)
      var onedata = {
        stu_id: this.data.stu_id,
        message: this.data.message,
        name: this.data.name,
        phone: this.data.phone,
        time: this.data.time,
        username: localStorage.getItem('username'),
        status: 0
      }
      console.log(onedata)
      console.log(onedata.time)
      if (onedata.message !== undefined && onedata.time !== undefined) {
        this.tools.axios.post('http://localhost:3000/question', {
          onedata
        })
          .then(
            function (res) {
              console.log(res)
              Toast('您已成功提交！')
            },
            function (err) {
              console.log(err)
            }
          )
      } else {
        Dialog.confirm({
          title: '提示',
          message: '请把信息填写完整'
        })
          .then(() => {
            // this.$router.push('/xyzn')
          })
          .catch(() => {
            // this.$router.push('/xyzn')
          })
      }
    },
    onConfirm (value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`)
      var mydate = value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate()
      this.data.time = mydate
      this.show = false
    },
    look () {
      this.$router.push('/process')
    }
  },
  data () {
    return {
      data: {
        stu_id: '',
        message: '',
        name: '',
        phone: '',
        time: ''
      },
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      show: false
    }
  },
  created () {
    var username = localStorage.getItem('username')
    var that = this
    this.tools.axios({
      url: 'http://localhost:3000/userinfo?username=' + username + '',
      method: 'get'
    })
      .then(
        function (res) {
          that.data = res.data
          console.log(res)
        },
        function (err) {
          console.log(err)
        }
      )
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar .van-icon{
  color: white;
}
/deep/ .van-nav-bar__text{
  color: white;
      font-size: 0.83rem;
}
/deep/  .van-nav-bar{
background: #45bce4;
}
/deep/  .van-nav-bar__title{
  color:white;
  font-size: 1.1rem;
}
.tou1{
  margin-top: 47px;
  height: 30px;
  width: 100%;
  background-color: rgba(230, 234, 238, 0.856);
}
</style>
