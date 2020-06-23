<template>
    <div>
        <navigation left="back" title="修改密码"></navigation>
        <div class="form">
 <Form @submit="onSubmit">
  <Field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <Field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</Form>
        </div>
    </div>
</template>
<script>
import navigation from '../../component/navigation'
import { Form, Field } from 'vant'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    navigation,
    Form,
    Field
  }

}
</script>
<style lang="less">
.form{
    margin-top:60px;
}
</style>
