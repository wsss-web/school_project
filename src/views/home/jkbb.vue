<template>
  <div>
      <NavBar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"/>
    <NoticeBar
      left-icon="volume-o"
      text="请大家认真填写，抗击肺炎，从我做起  &&日期：06月22日 周一"/>

   <Form @submit="onSubmit">
    <Field v-model="temp"
    label="1.今日体温："
    placeholder="今日体温"
    :rules="[{ required: true, message: '请输入今日体温' }]"/>

  <Field
    v-model="site"
    name="所在地"
    label="2.本人当前所在地："
    placeholder="当前所在地"
  />
   <Field name="radio" label="3.本人目前健康状况：">
        <template #input>
            <RadioGroup v-model="radio" direction="horizontal">
            <Radio name="1">健康，无症状</Radio>
            <Radio name="2">有症状</Radio>
            </RadioGroup>
        </template>
    </Field>

    <Field
    v-model="site2"
    name="详细地址"
    label="4.本人所在地详细地址："
    placeholder="所在详细地址"
  />

  <Field name="radio1" label="5.本人是否为确诊病例">
      <template #input>
            <RadioGroup v-model="radio1" direction="horizontal">
            <Radio name="1">是</Radio>
            <Radio name="2">否</Radio>
            </RadioGroup>
      </template>
    </Field>

    <Field name="radio2" label="6.是否外出">
        <template #input>
            <RadioGroup v-model="radio2" direction="horizontal">
            <Radio name="1">是</Radio>
            <Radio name="2">否</Radio>
            </RadioGroup>
        </template>
    </Field>

    <Field name="radio3" label="7.是否返校">
        <template #input>
            <RadioGroup v-model="radio3" direction="horizontal">
            <Radio name="1">是</Radio>
            <Radio name="2">否</Radio>
            </RadioGroup>
        </template>
    </Field>
    <Field v-model="oth"
    label="8.其他需要说明事项："
    placeholder="是否需要其他说明事项"/>
   </Form>
   <div style="margin: 16px;"  >
      <Button round block type="info" native-type="submit" @click="totoast">
        提交
      </Button>
    </div>
    <Toast/>
  </div>
</template>

<script>
import { Form, Field, Button, RadioGroup, Radio, NoticeBar, NavBar, Toast } from 'vant'
export default {
  name: 'lbt',
  components: {
    Form,
    Field,
    Button,
    RadioGroup,
    Radio,
    NoticeBar,
    NavBar,
    Toast
  },
  data () {
    return {
      temp: '',
      site: '',
      site2: '',
      radio: '0',
      radio1: '0',
      radio2: '0',
      radio3: '0',
      radio4: '0',
      msg: '',
      oth: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    onClickLeft () {
      this.$router.push({ path: '/index' })
    },
    totoast () {
      this.$toast({
        message: '提交成功',
        position: 'top'
      })
    }
  }
}
</script>

<style lang="less" scoped >
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
.wenzi1{
    font-size: 13px;
}
.wenzi2{
    font-size: 13px;
}
</style>
