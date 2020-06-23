<template>
    <div>
        <navigation left="back" title="修改密码"></navigation>
        <div class="form">
 <Form  >
  <Field
    v-model="username"
    type="password"
    placeholder="请输入原密码"
    :rules="[{ required: true, message: '请输入原密码' }]"
  />
  <Field
    v-model="password"
    type="password"
    name="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请输入新密码' }]"
  />
    <Field
    v-model="password2"
    type="password"
    name="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请再次输入密码' }]"
  />
</Form>
   <div class="bottom">
 <Button type="primary" size="large" @click="onSubmit">提交</Button>
    </div>
        </div>
    </div>
</template>
<script>
import navigation from '../../component/navigation'
import { Form, Field, Button } from 'vant'
export default {
  data () {
    return {
      username: '',
      password: '',
      password2: ''
    }
  },
  components: {
    navigation,
    Form,
    Field,
    Button
  },
  methods: {
    onSubmit (values) {
      console.log(1111)
      console.log('submit', values)
    }
  }

}
</script>
<style lang="less" scoped>
.form{
    margin-top:80px;
}
.bottom{
     margin: 10px 16px 80px 16px;
     .van-cell::after{
    border-bottom:none;
}
.van-button--primary{
    background:rgb(69,188,228);
    border:1px solid rgb(69,188,228);
    height: 2rem;
    border-radius: .3rem;
}
}
</style>
