<template>
  <div>
    <navigation left="back" title="健康报备"></navigation>
    <NoticeBar
      left-icon="volume-o"
      text="请大家认真填写，抗击肺炎，从我做起  &&日期：07月08日 周三" style="margin-top: 47px;"/>

   <Form @submit="onSubmit">
    <Field v-model="data.tody_tem"
    name='tody_tem'
    label="1.今日体温："
    placeholder="今日体温"
    :rules="[{ required: true, message: '请输入今日体温' }]"/>

  <Field
    v-model="data.place"
    name="site"
    label="2.本人当前所在地："
    placeholder="当前所在地"
  />
   <Field name="radio" label="3.本人目前健康状况：">
        <template #input>
            <RadioGroup v-model="data.radio" direction="horizontal">
            <Radio name="1">健康，无症状</Radio>
            <Radio name="2">有症状</Radio>
            </RadioGroup>
        </template>
    </Field>

    <Field
    v-model="data.del_address"
    name="site2"
    label="4.本人所在地详细地址："
    placeholder="所在详细地址"
  />

  <Field name="radio1" label="5.本人是否为确诊病例">
      <template #input>
            <RadioGroup v-model="data.radio1" direction="horizontal">
            <Radio name="1">是</Radio>
            <Radio name="2">否</Radio>
            </RadioGroup>
      </template>
    </Field>

    <Field name="radio2" label="6.是否外出">
        <template #input>
            <RadioGroup v-model="data.radio2" direction="horizontal">
            <Radio name="1">是</Radio>
            <Radio name="2">否</Radio>
            </RadioGroup>
        </template>
    </Field>

    <Field name="radio3" label="7.是否返校">
        <template #input>
            <RadioGroup v-model="data.radio3" direction="horizontal">
            <Radio name="1">是</Radio>
            <Radio name="2">否</Radio>
            </RadioGroup>
        </template>
    </Field>
    <Field v-model="data.other"
    name='other'
    label="8.其他需要说明事项："
    placeholder="是否需要其他说明事项"/>
    <Button round block type="info" native-type="submit" @click="totoast">
        提交
      </Button>
   </Form>
   <div style="margin: 16px;"  >
    </div>
  </div>
</template>

<script>
import navigation from '../../component/navigation'
import { Form, Field, Button, RadioGroup, Radio, NoticeBar, Dialog } from 'vant'
export default {
  name: 'lbt',
  components: {
    Form,
    Field,
    Button,
    RadioGroup,
    Radio,
    NoticeBar,
    navigation,
    [Dialog.Component.name]: Dialog.Component
  },
  created: function () {
    var that = this
    var usernam = localStorage.getItem('username')
    this.tools.axios({
      url: '' + this.tools.requrl + '/healthlook?username=' + usernam + '',
      method: 'get'
    })
      .then((res) => {
        if (res.data === '') {
          that.data.tody_tem = ''
          that.data.place = ''
          that.data.radio = ''
          that.data.del_address = ''
          that.data.radio1 = ''
          that.data.radio2 = ''
          that.data.radio3 = ''
          that.data.other = ''
        } else {
          that.data = res.data
        }
        console.log(res)
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  data () {
    return {
      data: {
        tody_tem: '',
        place: '',
        radio: '',
        del_address: '',
        radio1: '',
        radio2: '',
        radio3: '',
        other: ''
      }
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
      console.log('temp')
    },
    onClickLeft () {
      this.$router.push({ path: '/index' })
    },
    totoast () {
      var status = ''
      console.log(this.data)
      if (!this.data.username) {
        console.log('6666')
        // 添加操作
        status = 1
      } else {
        // 更新操作
        status = 3
      }
      var onedata = {
        tody_tem: this.data.tody_tem,
        place: this.data.place,
        radio: this.data.radio,
        del_address: this.data.del_address,
        radio1: this.data.radio1,
        radio2: this.data.radio2,
        radio3: this.data.radio3,
        other: this.data.other,
        username: localStorage.getItem('username'),
        status: status
      }
      var that = this
      console.log(onedata)
      this.tools.axios({
        url: '' + this.tools.requrl + '/healthinfo',
        method: 'get',
        params: onedata
      })
        .then((res) => {
          console.log(res)
          // Toast.success('您已提交成功')
          Dialog.confirm({
            title: '提示',
            message: '您已成功提交'
          })
            .then(() => {
              that.$router.push('/index')
            })
            .catch(() => {
              // on cancel
            })
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.wenzi1{
    font-size: 13px;
}
.wenzi2{
    font-size: 13px;
}
</style>
