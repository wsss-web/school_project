<template>
    <div>
        <navigation left="back" title="修改密码"></navigation>
        <div class="form">
 <Form @submit="onSubmit">
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
 <Button type="primary" size="large" @click="loginout">退出登录</Button>
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
  }

}
</script>
<style lang="less">
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
